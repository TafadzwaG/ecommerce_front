export interface AddToCartResponse {
    data: {
        cart_id: number,
        items: [
            {
                id: number,
                cart_id: number,
                quantity: number
            }
        ]
    }
}