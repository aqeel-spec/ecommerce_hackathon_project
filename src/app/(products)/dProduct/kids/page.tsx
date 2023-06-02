
import AllProductsCard from "@/components/AllProductsCard";
import { client } from "../../../../lib/sanityClient";

export const femaleData = async ( ) => {
    const res = await client.fetch(`*[_type=='products' && usecase->category == 'kids']{
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

export default async function Kids () {
    
    const data = await femaleData();

    if (data.length == 0 ) {
        return (
            <div className="">Sorry there is  no data for Kids</div>
        )
    }

    return (
        <AllProductsCard data={data} />
    )
}