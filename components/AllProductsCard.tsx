"use client"
import React, { Suspense, lazy } from "react";
import { urlFor } from "@/components/ImageBuilder";
import { IProduct } from "@/src/types/product";
import { Loader } from "../components/Loader";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter,usePathname } from "next/navigation";

const AllProductsCard = ({ data }: { data: IProduct[] }) => {

    const currentPath = usePathname();
    const router = useRouter();
    const slug = useParams().slug;

  // Filter out symbols from the data array
  const filteredData = data.filter((item) => typeof item !== "symbol");

  

  return (
    <div className="max-w-screen-lg justify-between py-2 my-16 mx-auto">
      <Suspense fallback={<Loader />}>
        <div   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-2">
          {filteredData && filteredData.map((item) => (
            <div
              className="Allproduct-card cursor-pointer"
              key={item._id}
              onClick={() => router.push(`${currentPath}/${item.slug.current}`) }
            >
              <Image src={urlFor(item.images[0]).url()} className="hover:object-cover " loading="lazy" alt={item._id} height={270} width={250} />
            
              <h1 className="Allproduct-name">{item.name}</h1>
              <h2 className="Allproduct-tag">{item.tag && item.tag.tag}</h2>
              <h3 className="Allproduct-price">${item.price}</h3>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default AllProductsCard;




// import Link from 'next/link';
// import React, { Suspense } from 'react';
// import Image from 'next/image';
// import { urlFor } from "@/components/ImageBuilder";
// import { IProduct } from '@/src/types/product';
// import {Loader} from '../components/Loader';

// const AllProductsCard = ( { data } : { data : IProduct[] } ) => {
//   return (
//     <div className=" max-w-screen-lg justify-between  py-2  my-16 mx-auto  ">
//         <Suspense fallback={<Loader/>} >
//             <Link href={`#`} className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   justify-between items-center gap-2">
//             {
//                 data && data.map((item) => (
//                 <div className="Allproduct-card" key={item._id} >
//                      <Image src={urlFor(item.images[0]).url()} alt={item._id} height={270} width={250} />
//                     <h1 className="Allproduct-name"> {item.name} </h1>
//                     <h2 className="Allproduct-tag"> { item.tag && item.tag.tag } </h2>
//                     <h3 className="Allproduct-price"> ${item.price} </h3>
//                 </div>
//                 ))
//             }
//             </Link>
//         </Suspense>
//         </div>
//   )
// }

// export default AllProductsCard
