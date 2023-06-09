"use client"
import { createContext , useContext , useState , useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { Toast } from "react-toastify/dist/types";
import { ToastContainer, toast } from 'react-toastify';
import { Context } from "vm";
import { Product } from "../types/product";
import 'react-toastify/dist/ReactToastify.css';

// export type Product = {
//     _id : string,
//     name : string,
//     price : number,
//     quantity? : number | any,
//     tag : string
// };
type StateContextProps = {
    showCart: boolean;
    setShowCart: Dispatch<SetStateAction<boolean>>;
    cartItems: Product[];
    setCartItems: Dispatch<SetStateAction<Product[]>>;
    totalPrice: number;
    setTotalPrice: Dispatch<SetStateAction<number>>;
    totalQty: number;
    setTotalQty: Dispatch<SetStateAction<number>>;
    qty: number;
    incQty: () => void;
    decQty: () => void;
    onAdd: (product: Product, quantity: number) => void;
    toggleCartItemQuantity: (id: string, value: "inc" | "dec") => void;
    onRemove: (product: Product) => void;
};



const defaultState = {
    showCart : false,
    setShowCart : () => {},
    cartItems : [],
    setCartItems : () => {},
    totalPrice : 0,
    setTotalPrice : () => {},
    totalQty : 0,
    setTotalQty : () => {},
    qty : 1,
    incQty : () => {},
    decQty : () => {},
    onAdd  : () => {},
    toggleCartItemQuantity : () => {},
    onRemove : () => {}
} as StateContextProps;

type UserProviderProps = {
    children : ReactNode
};
const CartContext = createContext(defaultState);


export default function     CartProvider ( {children} : UserProviderProps ) {
   
    const [showCart, setShowCart] = useState<boolean>(false);
const [cartItems, setCartItems] = useState<Product[]>([]);
const [totalPrice, setTotalPrice] = useState<number>(0);
const [totalQty, setTotalQty] = useState<number>(0);
const [qty, setQty] = useState<number>(1);

let foundProduct: Product | undefined;
let index: number;

const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQty((prevTotalQty) => prevTotalQty + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`,{
      position: toast.POSITION.TOP_RIGHT,
      className: "text-red-500",
    })
};

// remove items from cart
const onRemove = (product: Product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - foundProduct!.price * foundProduct!.quantity
    );
    setTotalQty((prevTotalQty) => prevTotalQty - foundProduct!.quantity);
    setCartItems(newCartItems);
    toast.success(`Successfully removed from cart.`,{
      position: toast.POSITION.TOP_RIGHT,
      className: "text-red-500",
    })
};

// toggle alert
const toggleCartItemQuantity = (id: string, value: "inc" | "dec") => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct!, quantity: foundProduct!.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct!.price);
      setTotalQty((prevTotalQty) => prevTotalQty + 1);
    } else if (value === "dec") {
      if (foundProduct!.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct!, quantity: foundProduct!.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct!.price);
        setTotalQty((prevTotalQty) => prevTotalQty - 1);
      }
    }
};


// increase quantity 
const incQty = () => {
    setQty((prevQty) => prevQty + 1);
};
// decerase quantity
const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

    return (
        <CartContext.Provider 
        value={{
            showCart,
            setShowCart,
            cartItems,
            setCartItems,
            totalPrice,
            totalQty,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuantity,
            onRemove,
            setTotalPrice,
            setTotalQty 
          }}
          >   <ToastContainer />
            {children}
           
        </CartContext.Provider>
    )
}
export const useStateContext = () => useContext(CartContext);

// const [showCart, setShowCart] = useState<boolean>(false);
// const [cartItems, setCartItems] = useState<Product[]>([]);
// const [totalPrice, setTotalPrice] = useState<number>(0);
// const [totalQty, setTotalQty] = useState<number>(0);
// const [qty, setQty] = useState<number>(1);

// let foundProduct: Product | undefined;
// let index: number;

// const onAdd = (product: Product, quantity: number) => {
//     const checkProductInCart = cartItems.find(
//       (item) => item._id === product._id
//     );

//     setTotalPrice(
//       (prevTotalPrice) => prevTotalPrice + product.price * quantity
//     );
//     setTotalQty((prevTotalQty) => prevTotalQty + quantity);

//     if (checkProductInCart) {
//       const updatedCartItems = cartItems.map((cartProduct) => {
//         if (cartProduct._id === product._id)
//           return {
//             ...cartProduct,
//             quantity: cartProduct.quantity + quantity,
//           };
//         return cartProduct;
//       });

//       setCartItems(updatedCartItems);
//     } else {
//       product.quantity = quantity;

//       setCartItems([...cartItems, { ...product }]);
//     }

//     toast.success(`${qty} ${product.name} added to the cart.`);
// };

// // remove items from cart
// const onRemove = (product: Product) => {
//     foundProduct = cartItems.find((item) => item._id === product._id);
//     const newCartItems = cartItems.filter((item) => item._id !== product._id);

//     setTotalPrice(
//       (prevTotalPrice) => prevTotalPrice - foundProduct!.price * foundProduct!.quantity
//     );
//     setTotalQty((prevTotalQty) => prevTotalQty - foundProduct!.quantity);
//     setCartItems(newCartItems);
// };

// // toggle alert
// const toggleCartItemQuantity = (id: string, value: "inc" | "dec") => {
//     foundProduct = cartItems.find((item) => item._id === id);
//     index = cartItems.findIndex((product) => product._id === id);
//     const newCartItems = cartItems.filter((item) => item._id !== id);

//     if (value === "inc") {
//       setCartItems([
//         ...newCartItems,
//         { ...foundProduct!, quantity: foundProduct!.quantity + 1 },
//       ]);
//       setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct!.price);
//       setTotalQty((prevTotalQty) => prevTotalQty + 1);
//     } else if (value === "dec") {
//       if (foundProduct!.quantity > 1) {
//         setCartItems([
//           ...newCartItems,
//           { ...foundProduct!, quantity: foundProduct!.quantity - 1 },
//         ]);
//         setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct!.price);
//         setTotalQty((prevTotalQty) => prevTotalQty - 1);
//       }
//     }
// };


// // increase quantity 
// const incQty = () => {
//     setQty((prevQty) => prevQty + 1);
// };
// // decerase quantity
// const decQty = () => {
//     setQty((prevQty) => {
//       if(prevQty - 1 < 1) return 1;
     
//       return prevQty - 1;
//     });
//   }