import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null>

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`pk_test_51NGHPdG5RgPLOWzHXYr7XaZ8oo3USVjd0cpkp70xKxx7fZvue4dHN0DngyQhc8njj9fa9prifh1qz0ncZWIRoMnQ00kYbiGW2c` || '')
  }

  return stripePromise
}

export default getStripe