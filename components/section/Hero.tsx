import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import Image from "next/image";
import { feature1 , feature2,feature3,feature4, header } from "@/public/assests";

const Hero = () => {
  return (
    <header className="header lg:top-10 top-0 ">
      <div className="header-left-side">
        <div className="header-content">
          <span >Sale 50%</span>
          <h1 >An Industrial Take on Streetwear</h1>
          <p className="">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <Link href={'/products'}>
             <Button className="btn"><CgShoppingCart className="mr-2 h-5 w-5  "/> Start Shopping </Button>
          </Link>
        </div>

        { /** featurd image section */}
        <div className='header-featured lg:mt-auto mt-[20px] '>
             <Image src={feature1} width={100} height={35} alt='img' />
             <Image src={feature2} width={100} height={35} alt='img' />
             <Image src={feature3} width={100} height={35} alt='img' />
             <Image src={feature4} width={100} height={35} alt='img' />
        </div>
      </div>
      <div className='header-right-side hidden lg:flex '>
        <div className='header-circle'>
          <Image className='header-img' src={header} width={650} height={650} alt='header image' />
        </div>
      </div>
    </header>
  );
};

export default Hero;