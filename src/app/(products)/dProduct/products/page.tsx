
import AllProductsCard from "@/components/AllProductsCard";
import { client } from "../../../../lib/sanityClient";

export const femaleData = async ( ) => {
   
    const res = await client.fetch(`*[_type=='products']{
        name,
        price,
        _id,
        images,
        tag -> {
            tag
        },
    }`);
   return res
}

export default async function Products () {
   
    const data = await femaleData();
    console.log("data -> ",data)

    return (
        <AllProductsCard data={data} />
    )
}