import { ProductInterface } from './product-interface';

export  interface  CartItem {
    id: number
    cart_id: number
    quantity: number
    product: ProductInterface
}