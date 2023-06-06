"use client"

import Image from "next/image";
import {  Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./../ui/navigation-menu";
import { useRouter } from "next/navigation";
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';

// value using useContext
import { useState, useRef, useContext, useEffect } from 'react';
import { SearchContext } from "@/src/context/searchContext";
import { useStateContext } from "@/src/context/cartContext";

const manuLi = [
  {
    name : "Female",
    path : "/female",
  },
  {
    name : "Male",
    path : "/male",
  },
  {
    name : "Kids",
    path : "/kids",
  },
  {
    name : "All Products",
    path : "/products",
  }
]

const Navbar = () => {
  const router = useRouter();

  const [toggleMenu, setToggleMenu] = useState(false);
  const {search,setSearch} = useContext(SearchContext);
  
 

  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }
   

  const {showCart, setShowCart, totalQty} = useStateContext();

  return (
    <nav className="flex lg:px-20 px-10 justify-between items-center h-20 ">
  <Image src="/Logo.webp" alt="website logo" onClick={() => router.push(`/`)} width={150} height={150} className="hover:cursor-pointer"/>
  <div className="lg:flex hidden ">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="space-x-5 text-[#000000] text-base font-sans  ">
          {
            manuLi.map((menu) => (
              <Link href={menu.path} key={menu.name} legacyBehavior passHref >
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}  leading-5 text-md `} >
                {menu.name}
                </NavigationMenuLink>
              </Link>
            ))
          }
       
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
  <div className="lg:flex hidden border-[1px] border-[#e4e5eb] items-center w-[30%] rounded-[5px] pl-[5px] ">
    <Search className="bg-white rounded-l p-0 m-0 h-[1em] w-[1em]  " />{" "}
    <input
       onChange={(e) => setSearch({value : e.target.value})}
      type="text"
      placeholder="What you are looking for"
      className="rounded-r border-none p-[5px] w-full text-sm "
    />
  </div>
  {
    showCart ? (
      <Link onClick={() => setShowCart(false)} href={`/cart`} className="lg:flex hidden p-3 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 rounded-full bg-gray-200 transition ease-in delay-150 duration-200 relative">
        <span className="absolute top-1 right-1 transform translate-x-2 -translate-y-2 h-6 w-6 text-center rounded-full bg-red-500 text-white">
        {totalQty}
        </span>
        <ShoppingCart className="" />
       </Link>
    ) : (
      <div onClick={() => setShowCart(true)}   className="lg:flex hidden p-3 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 rounded-full bg-gray-200 transition ease-in delay-150 duration-200 relative">
        <span className="absolute top-1 right-1 transform translate-x-2 -translate-y-2 h-6 w-6 text-center rounded-full bg-red-500 text-white">
        {totalQty}
        </span>
        <ShoppingCart className="" />
    </div>
    )
  }
  <div className={`  lg:hidden items-end w-[300px] relative flex flex-col`}>
        {!toggleMenu ? (
          <div className=" cursor-pointer " onClick={handleClick} >
            <RiMenu3Line className="h-7 w-7  cursor-pointer " />
            
          </div>
        ) : (
          <>
            <RiCloseLine className="h-7 w-7 cursor-pointer" onClick={handleClick} />
            <ul className={`dropDown_box pb-12 `}>
            {manuLi.map((menu , i) => (
              <li key={i} className='space-y-6 my-2 hover:border-l-white hover:border-l-4 w-full  rounded-r-lg py-2 hover:bg-sky-200  ' >
                <Link href={`${menu.path}`}  >
                  <span className={` hover:border-b-2 px-2 pb-1 `}>{menu.name}</span>
                </Link>
              </li>
            ))}
        </ul>
          </>

        ) }
  </div>
</nav>

  );
};

export default Navbar;
