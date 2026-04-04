import { state } from "../State/store.js";
import { renderCart } from "./renderCart.js";
export function addCart(product) {
    const productIndex = state.cart.findIndex(prtIn => prtIn.id === product.id);
    if(productIndex >= 0){
        state.cart[productIndex].quantity += 1;
    }else{
        state.cart.push({...product,quantity:1})
    }
}



export function btnAddCart() {

const btnaddCart = document.querySelectorAll('.btn-add'); 

btnaddCart.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const id = Number(btn.dataset.id);
        const product = state.products.find(prod => prod.id === id);
        addCart(product)
        renderCart()
    console.log(state.cart)
    })
})
}



export function removeProduct(productId) {
    state.cart = state.cart.filter(prod => prod.id !== productId);
    
}


export function deleteCart() {

const deleteCart = document.querySelectorAll('.delete'); 

deleteCart.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const id = Number(btn.dataset.id);
        removeProduct(id)
        renderCart()
    })
})
}

// export function calculateCartTotal() {
//     state.cartTotal = state.cart.reduce((total, product)=>total + product.price * product.quantity, 0);
//     console.log(state.cartTotal)
// }
