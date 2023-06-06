export interface Product {
    _id : string,
    name : string,
    price : number,
    quantity? : number | any,
    tag : {tag : string},
    images : any[]
} 
export interface IProduct extends Product {
    // name : string,
    // price : number,
    description : string,
    care : string[],
    // _id : string,
    // images : any[],
    // tag : {tag : string},
    slug: { current : string },
    usecase: {category : string} ,
    // quantity? : number | any
}
