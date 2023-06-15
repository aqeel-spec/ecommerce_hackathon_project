import Hero from '@/components/section/Hero';
import Events from '@/components/section/Events';
import Product from '@/components/section/Product';
import Features from '@/components/section/Features';
import NewsLetters from '@/components/section/NewsLetters';
import UserInfo from '@/components/userInfo';

export default async function Home() {
  return (

    <div className='lg:px-20 px-10 '> 
    {/* clert sugnOut button */}
      <UserInfo greeting='Hello' msg={"welcome to Dino Market"} />
     { /** hero section */ }
     <Hero />
      { /** events promotion */ }
      <Events />
      {/** all out products in slider */}
      <Product />
      {/** all features we have */}
      <Features />
      {/** newsletter subscription */}
      <NewsLetters />
      
      
    </div>
  )
}