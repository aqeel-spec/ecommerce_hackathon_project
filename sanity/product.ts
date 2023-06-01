export const product = {
    name : "product",
    type : "document",
    title : "Product",
    fields : [
        {
            name : "title",
            title : "Title",
            type : "string"
        },
        {
            name : "price",
            title : "Product price",
            type : "number"
        },
        {
            name : "description",
            title : "Product description",
            type : "string"
        },
        {
            name : "image",
            title : "Product image",
            type : "image"
        }
        // {
        //     name : "image",
        //     title : "Product image",
        //     type : "array",
        //     of: [{
        //         name : "img",
        //         title : "image",
        //         type : "image"
        //     }]
        // }
    ]
}