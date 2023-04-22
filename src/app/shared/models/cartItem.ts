import { Foods } from "./food";

export class CartItem{
    forEach(arg0: (item: any) => void) {
        throw new Error("Method not implemented.");
    }

    constructor(food:Foods){
        this.food= food;
        this.price;
    }

    food: Foods;
    quantity: number =1;
    get price(): number{
        return this.food.price * this.quantity;
    }
}