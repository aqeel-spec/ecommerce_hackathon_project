import AllProductsCard from "@/components/AllProductsCard";
import { client, clientNoCdn } from "@/src/lib/sanityClient";
import { IProduct } from "@/src/types/product";
//import { useParams } from "next/navigation";

export const femaleData = async (documentName: string) => {
  if (documentName == "products") {
        const res = await client.fetch(`*[_type=="products"]{
            name,
            price,
            description,
            care,
            _id,
            images,
            tag -> {
                tag
            },
            slug
            }`
        );
        return res
    }else {
        const res = await client.fetch(`*[_type=="products" && usecase->category == $documentName]{
            name,
            price,
            description,
            care,
            _id,
            images,
            tag -> {
                tag
            },
            slug
            }`,{
                documentName
            }
        );
        return res
    }

  // const res = await client.fetch(`*[_type=="products" && usecase->category == $documentName]{
  //     name,
  //     price,
  //     description,
  //     care,
  //     _id,
  //     images,
  //     tag -> {
  //         tag
  //     },
  //     slug

  // }` , {
  //     documentName
  // } );
  //     const res2 = await client.fetch(`
  //     *[_type="products" && usecase->category == $documentName] {
  //       name,
  //       price,
  //       description,
  //       care,
  //       _id,
  //       images,
  //       tag -> {
  //         tag
  //       },
  //       slug
  //     }
  //   `, {
  //     documentName,
  //   });
  //     return res
};

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const category = params.product;
  const data: IProduct[] = await femaleData(category);

  if(data.length == 0) {
    return (<p className="text-4xl text-center mx-auto text-red-300">Sorry we dont have any data for such post</p>)
  };

  return (
    <>
      <AllProductsCard data={data}  />
    </>
  );
}