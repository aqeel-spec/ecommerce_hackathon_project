"use client"
import { client } from '@/src/lib/sanityClient';
import React from 'react';
import DetailCard from '@/components/DetailCard';



export const productDdata = async (productSlug?: string) => {
  const res = await client.fetch(`*[_type == "products" && slug.current == $productSlug] {
    name,
    price,
    description,
    care,
    _id,
    images,
    tag -> {
      tag
  },
  }`, {
    productSlug
});
  return res
}

const page = async ({params, searchParams  }: { params: { details: string } ,searchParams: { id: string }, } ) => {

  const slug = params.details;
  const data = await productDdata(slug);
  console.log("slug is ->",slug)


  return (
    <>
      <DetailCard data={data} />
    </>
  )
}

export default page




