import Link from 'next/link';
import Image from 'next/image';
import { feature } from '@/public/assests';
import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/src/lib/utils';

const Features = () => {
  return (
    <section className='feature-container   mt-16  '>
      <div className="title">
        <h1>Unique and Authentic Vintage Designer Jewellery</h1>
      </div>
      <div className="content ">
        <div className="left-side">
            <div className="feature-watermark">Different from others</div>
        
            <div className="">
                <h3>Using Good Quality Material</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h3>100% Handmade Products</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h3>Modern Fashion Design</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h3>Discount for Bulk Orders</h3>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div className='right-side '>
          <Image src={feature} width={300} height={350} alt='img' />
          <div>
            <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={'/products'}>
            <Button
              
              className={'text-sm h-auto flex rounded-none bg-primary  w-1/2 text-white  font-bold'}
              type="button"
            >
              See All Products
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
