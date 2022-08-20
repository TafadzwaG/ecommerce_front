export interface AuthResponseData {
    user : {
        id : number,
        name : string,
        email : string,
        email_verified_at : string,
        created_at : string,
    
        wishlist : {
            id: number
            user_id : number,
            items : []
        },
    
        cart : {
            id: number
            user_id : number,
            items : []
        }
       } 
       access_token : string
}