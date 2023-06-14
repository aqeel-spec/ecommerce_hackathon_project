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
      <UserInfo />
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
// interface IProduct {
//   title : string,
//   description : string,
//   _id : string,
//   image : any
// }


{/** ###################### I created image builder in components ##################### */}
// const builder = imageUrlBuilder(client)
// export function urlFor(source : any) {
//   return builder.image(source)
// }



// export const productData =async () => {
//   const res = await client.fetch(`*[_type=='product']{
//     title,
//     description,
//     _id,
//     image
//   }`)
//   return res
// }
    // <div className="">
    //   {
    //     data.map((item) => (
    //       <div className="border-2 shadow-lg p-4 bg-sky-200 mx-auto my-2 max-w-sm  justify-center "  key={item._id}>
    //         <Image src={urlFor(item.image).url()} alt={item.title} height={270} width={250} />
    //         <h1> {item.title} </h1>
    //         <p> {item.description} </p>
    //       </div>
    //     ))
    //   }
    // </div>