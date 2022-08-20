export class User {
    constructor(
        public id : number,
        public name: string, 
        public email : string,
        private _token : string,
        private _cart : {
            id : number,
            items : []
        },
        private _wishlist :{
            id : number,
            items : []
        }

    ) {}

    get token() {
        return this._token;
    }

    get cart() {
        return this._cart;
    }

    get wishlist(){
        return this._wishlist
    }

}