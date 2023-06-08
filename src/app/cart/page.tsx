"use client"
import { useStateContext } from '@/src/context/cartContext';
import React from 'react';
import {AiOutlineShopping} from 'react-icons/ai';
import { urlFor } from '@/components/ImageBuilder';
import {HiOutlineTrash} from "react-icons/hi";
import { formatPrice } from '@/src/lib/helper';
import { toast } from 'react-toastify';
import getStripe from '@/src/lib/getStripe';

const Cart = () => {

    const {cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity} = useStateContext();
   
    const handlePayNow = async () => {
        const stripe = await getStripe()
        try {
            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({cartItems}),
              });

              if(response.status === 500) return

              const data = await response.json();
              console.log("res data of stripe ",data)
              toast.loading('Redirecting...')

              stripe?.redirectToCheckout({ sessionId: data.id })
              
        } catch (error) {
            console.log(error)
        }
        
      }
  return (
    <div className='  md:p-12 justify-center items-center mx-auto '>
        {/* name */}
        <h2 className='text-3xl font-bold text-primary '>Shopping Cart</h2>
        {/* cart container */}
        <div className="flex flex-col md:flex-row  justify-between gap-8 mt-8 ">
            {/* cart items */}
            {/* <div className="flex flex-col gap-4 md:gap-16 mt-8 flex-1" */}
                {/* empty cart */}
                {cartItems.length < 1 && (
                        <div className="flex flex-col m-auto ">
                            <AiOutlineShopping size={150} />
                            <h1 className='text-3xl lg:text-2xl md:text-xl font-bold text-primary '>Your shopping bag is empty.</h1>
                        </div>
                    )
                }
               {/* if there is something in shopping bag */}
               {
                     cartItems.length >= 1 && cartItems.map((item) => (
                        // item card
                        <div className="flex flex-col    md:flex-row  " key={item._id}>
                            {/* item image */}
                            <div className=" w-full md:w-[80%] h-[20%]  ">
                                <img src={urlFor(item.images && item.images[0]).url()} alt={item.name} />
                            </div>
                            {/* item details */}
                            <div className="flex md:gap-y-4 gap-y-0 flex-col justify-between w-auto md:w-[70%] ">
                                {/* name and remove  icon */}
                                <div className="flex justify-center gap-4 md:justify-between ">
                                    <h3 className=' text-xl md:text-2xl lg:text-3xl  text-primary  '> {item.name} </h3>
                                    <button type='button' className='hover:text-red-500' onClick={() => onRemove(item)}>
                                    <HiOutlineTrash size={28} />  
                                    </button>
                                </div>
                                {/* item tags */}
                                <h2 className=" my-8 text-2xl font-semibold opacity-30">
                                    {item.tag.tag}
                                </h2>
                                {/* delivery estiumation */}
                                <p className=' text-primary font-semibold text-xl '>Delivery Estimation</p>
                                 {/* item delivery time */}
                                 <p className=' text-yellow font-semibold text-xl '>5 Working Days</p>
                                 {/* item price */}
                                <div className="flex gap-4 justify-items-center  ">
                                    <span className=" text-xl lg:text-2xl font-bold">
                                        {formatPrice((item.price * item.quantity), "PKR")}
                                    </span>
                                    {/* plus and minus btn */}
                                    <div className="flex items-center text-center gap-4">
                                        <div className="btn2" onClick={() => toggleCartItemQuantity(item._id,"dec")}>-</div>
                                        <p>{item.quantity}</p>
                                        <div className="btn3" onClick={() => toggleCartItemQuantity(item._id,'inc')}>+</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                     ))
                }
            </div>
            {
                cartItems.length >= 1 &&  (
                    <div className="mt-2  border-[1px] max-h-[360px] bg-white/60 border-yellow shadow-sm shadow-primary p-4 flex-grow space-y-6 mx-auto text-center text-black max-w-full lg:max-w-sm  ">
                        <h1 className="py-6 text-2xl font-bold text-black">Order Details</h1>
                        <div className="text-sm  space-y-6  divide-yellow-500 text-black">
                        <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                            <p className='text-sm'> All  price </p>
                            <h3> {formatPrice(totalPrice, "PKR")}  </h3>
                        </div>
                        <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                            <p className='text-sm'> Total Products </p>
                            <h3> {totalQty}  </h3>
                        </div>
                        <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                            <p>Tax</p>
                            <h3>{formatPrice(0, "PKR")}</h3>
                        </div>
                        <div className=" border-b-[1px] pb-1 border-b-orange flex px-2 justify-between m-2  ">
                            <p>Total</p>
                            <h3> {formatPrice(totalPrice, "PKR")}  </h3>
                        </div>
                        </div>
                        <div className=" text-end mx-auto items-center justify-center justify-items-center text-white font-sans  ">
                        <button type="button" onClick={handlePayNow} className="hbtn mx-auto justify-end px-5 py-[2px] rounded-[4px] w-full bg-primary  ">
                            PAY NOW
                        </button>
                        </div>
                    </div>
                )
            }
     </div>
  )
}

export default Cart