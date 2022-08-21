
export class Product {
    constructor(
        id: number,
        name : string,
        description: string,
        price : number,
        product_images : [
            {
                name : string
            }
        ],
        rating: string | number,
        stock : number,
        discount: number,
        totalPrice : number,
        categories : [],
        href: {}
    ){
        
    }
}