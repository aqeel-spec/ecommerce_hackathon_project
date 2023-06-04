export interface IProduct {
    name : string,
    price : number,
    description : string,
    care : string[],
    _id : string,
    images : any[],
    tag : {tag : string},
    slug: { current : string },
    usecase: {category : string} ,
}