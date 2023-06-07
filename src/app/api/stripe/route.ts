import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export const POST = async (request : NextRequest , response : NextResponse) => {
    const res : any = request.body;

    console.log("res is  here",res)
      

    try {
       const params :  Stripe.Checkout.SessionCreateParams = {
        submit_type : 'pay',
        mode : 'payment',
        payment_method_types : ['cart'],
        billing_address_collection : "auto",
        success_url : `${process.env.URL}/successPay/orders?order_success=true`,
        cancel_url : `${process.env.URL}/cancled`,
        line_items :     res.map((item : any) => {
            const img = item.image[0].asset._ref;
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/dow10h3v/production/').replace('-png', '.png');
    
            return {
              price_data: { 
                currency: 'usd',
                product_data: { 
                  name: item.name,
                  images: [newImage],
                },
                unit_amount: item.price * 100,
              },
              adjustable_quantity: {
                enabled:true,
                minimum: 1,
              },
              quantity: item.quantity
            }
        }),
        shipping_options: [
            { shipping_rate: 'shr_1MJIEoHbmXqvpyhdyi5WNQHl' },
            { shipping_rate: 'shr_1NGJ5SG5RgPLOWzHYicMzPMG' }
        ],
        
       } as any;
       const stringSession : Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

       return NextResponse.json(stringSession)

    } catch (error) {
        return NextResponse.json({ message : (error as {message : string}).message })
    }
}
