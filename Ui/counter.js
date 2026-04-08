import { state } from "../State/store.js";



export function countCart() {
    const counter = document.querySelectorAll('.counter')

    if(!counter) return

    const total = state.cart.reduce((prd, art)=> prd + art.quantity, 0)

    counter.forEach(countr=>{
        countr.textContent = total
    })
    
}

