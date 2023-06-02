
import AllProductsCard from "@/components/AllProductsCard";
import { client } from "../../../../lib/sanityClient";

export const femaleData = async ( ) => {
    const res = await client.fetch(`*[_type=='products' && usecase->category == 'female']{
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

export default async function Female () {
    const data = await femaleData();

    return (
        <AllProductsCard data={data} />
    )
}