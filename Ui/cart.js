import { state } from "../State/store.js";
import { renderCart } from "./renderCart.js";
import { savecart } from "./persistencia.js";
import { countCart } from "./counter.js";
export function addCart(product) {
    const productIndex = state.cart.findIndex(prtIn => prtIn.id === product.id);
    if(productIndex >= 0){
        state.cart[productIndex].quantity += 1;
     
    }else{
        state.cart.push({...product,quantity:1})
    }
    savecart()
    countCart()
}



export function btnAddCart() {

document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.btn-add')
    const icon = document.querySelector('.icon')
    if(btn){
        const id = Number(btn.dataset.id)
        const product = state.products.find(prd=>prd.id === id)
        btn.textContent = 'Added'
        btn.style.backgroundColor = 'rgb(22, 84, 217)'
        btn.style.color =' rgb(255, 255, 255)'
        setTimeout(() => {
            btn.textContent = 'Add Product'
            btn.style.backgroundColor = ''
            btn.style.color = ''
        }, 500);
        addCart(product)
        renderCart()
    }
})


}



export function removeProduct(productId) {
    state.cart = state.cart.filter(prod => prod.id !== productId);
    savecart()
    countCart()
    
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

export function calculateCartTotal(carrt) {
   return carrt.reduce((total, product)=>total + product.price * product.quantity, 0);

}

