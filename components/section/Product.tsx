"use client"
import Image from 'next/image';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import  Link  from 'next/link';
import { products } from './dummyProduct';

const Product = () => {

  return (
    <div className='py-[30px] event-container'>
       
        <div className="subtitle">
             {/** product */}
            <span>PRODUCTS</span>
             {/** our collection  */}
            <h2>Check What We Have</h2>
        </div>
       
       {/** main div for images */}
       <Swiper
           modules={[Navigation, A11y]}
           spaceBetween={0}
           slidesPerView={3}
           breakpoints={{
            // width >= 300
            300: {
              slidesPerView: 1,
              spaceBetween: 100
            },
            // width >= 1000
            1000: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            // width >= 1260
            1260: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }}
          className='Allproducts-container  pt-4 flex flex-grow justify-center'
            
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className='  cursor-pointer '>
              
              <Link className="product-card flex flex-col  items-center" href={`#${product.name}`}>
                <Image src={product.image} alt={`product ${index + 1}`} height={400} width={380} />
                <p className="product-name ">{product.name}</p>
                <p className="product-price ">{product.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      
    </div>
  )
}

export default Product
