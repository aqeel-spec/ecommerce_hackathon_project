
import AllProductsCard from "@/components/AllProductsCard";
import { client } from "../../../../lib/sanityClient";

export const femaleData = async ( ) => {
    const res = await client.fetch(`*[_type=='products' && usecase->category == 'male']{
        name,
        price,
        _id,
        images,
        tag -> {
            tag
        },
        'usecase': usecase->category,
        slug

    }`);
    return res
}

export default async function Male () {
    const data = await femaleData();
    console.log("data -> ",data)

    return (
        <AllProductsCard data={data} />
    )
}