"use client"
import { client } from "../../../lib/sanityClient";
import Image from 'next/image';
import { urlFor } from "@/components/ImageBuilder";
import Link from "next/link";
import {  useRouter } from "next/navigation";





 
export default async function Page() {

    return (
        <></>
    )
}

// export const getStaticProps = async ({ params }: { params: { slug: string[] } }) => {
//     const query = `*[_type == "product" && slug.current == '${params.slug}']`;
//     const product = await client.fetch(query);
  
//     return {
//       props: { product },
//     };
// };
// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
//       slug {
//         current
//       }
//     }`;
  
//     const products = await client.fetch(query);
  
//     const paths = products.map((product : any) => ({
//       params: {
//         slug: product.slug.current,
//       },
//     }));
  
//     return {
//       paths,
//       fallback: 'blocking',
//     };
//   };