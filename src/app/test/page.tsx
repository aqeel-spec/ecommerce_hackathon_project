"use client"
import { client } from '@/src/lib/sanityClient';
import { StoreData } from '@/src/types/product';
import React, { useEffect, useState } from 'react';

import { vercelProduct, sanityProduct} from '@/src/lib/userProduct';

// export const sanityProduct = async (product_id: string) => {
//   const res = await client.fetch(`*[_type == "products" && _id == $product_id] {
//     name,
//     price,
//     description,
//     care,
//     _id,
//     images,
//     tag -> {
//       tag
//     },
//     slug,
//   }`, {
//       product_id
// });
//   return res
// }

const Page = async () => {
  // const [vData, setVData] = useState<StoreData[]>();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await vercelProduct();
  //     setVData(res)
  //   }
  //   fetchData()
  // }, []);
  
  
  // if (vData) {
  //   console.log(`vData`, vData);
  //   const results = [];
  //   for (const productId of  vData.map((product) => product.product_id) ) {
  //     const result = await sanityProduct(productId);
  //     const combinedData = {...result}
  //     results.push(combinedData);
  //   }
  //   console.log("sanity Data", results);
  // }

  return <div>page</div>;
};

export default Page;

// const page = async () => {
//   const vercelData: StoreData[] = await vercelProduct();
//   // const project_ids = vercelData.map((p) => p.product_id);
//   // const sanityProducts = await Promise.all();
//   // const combinedData = await Promise.all(sanityProducts);
//   // console.log("combinedData",combinedData)
//  if(vercelData !== null) {
//   console.log("vercelData",vercelData)
//  }
//   return (
//     <div>page</div>
//   )
// }

// export default page