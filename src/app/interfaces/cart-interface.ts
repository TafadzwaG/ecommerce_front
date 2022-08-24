import { Product } from './../models/product.model';

export interface CartInterface {
    cart_id: number,
    items : [
        id: number,
        cart_id: number,
        quantity: number,
        product : Product
    ]
    
}
