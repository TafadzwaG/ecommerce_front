import { Product } from './../models/product.model';

export  interface  CartItem {
    id: number
    cart_id: number
    quantity: number
    product: Product
}