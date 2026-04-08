import { state } from "../State/store.js";

export function savecart() {
        localStorage.setItem('cart', JSON.stringify(state.cart))
}


export function loadCart(){
    const data = localStorage.getItem('cart')

    if(data){
        state.cart = JSON.parse(data)
    }
}