import { client } from "@/src/lib/sanityClient";
import { useParams } from "next/navigation";

interface IProduct {
    name : string,
    price : number,
    description : string,
    care : string[],
    _id : string,
    images : any[],
    tag : {tag : string}
}
export const femaleData = async ( documentName : string ) => {
    const res = await client.fetch(`*[_type=="${documentName}"]{
        name,
        price,
        description,
        care,
        _id,
        images,
        tag -> {
            tag
        }

    }`);
    return res
}

 
export default async function Page({ params }: { params: { slug: string[] } }) {
    const slug = useParams().slug;
  //  const data : IProduct[] = await femaleData(params.slug);
    console.log("params from useParams -> ",slug)
    console.log("slug is -> ",params)
    return (
        <div className=" max-w-screen-lg justify-between  py-2  my-16 mx-auto  ">
            {/* <Link href={`#`} className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3   justify-between items-center gap-2">
            {
                data && data.map((item) => (
                <div className="Allproduct-card" key={item._id} >
                     <Image src={urlFor(item.images[0]).url()} alt={item._id} height={270} width={250} />
                    <h1 className="Allproduct-name"> {item.name} </h1>
                    <h2 className="Allproduct-tag"> { item.tag && item.tag.tag } </h2>
                    <h3 className="Allproduct-price"> ${item.price} </h3>
                </div>
                ))
            }
            </Link> */}
        </div>
    )
}