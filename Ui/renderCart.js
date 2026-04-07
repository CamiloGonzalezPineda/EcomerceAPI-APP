import { state } from '../State/store.js'
import { deleteCart } from './cart.js';
import { calculateCartTotal } from './cart.js';

export function renderCart() {
    const container = document.getElementById('cart')
    if(!container) return;
    const total = calculateCartTotal(state.cart).toFixed(2)

    container.innerHTML = `
<h3>PRODUCTS</h3>

${state.cart.map(product => `
        
    <div class="cardt">
   
    <img src="${product.image}" alt="${product.title}" style="width: 70px; height: 70px;">
    <h2> ${product.title}</h2>
    <p>Price: $${product.price}</p>
    <p>Quantity: ${product.quantity}</p>
       <button class="delete" data-id="${product.id}"> X </button>
    </div>

 
    `).join('')} 

        <div id="total">Total:<strong class='totalGreen'>$${total}</strong></div>
      <button class='btn-deletCart'> Vaciar Carritos </button>  `
    deleteCart()
  
       
    const btnVaciar = document.querySelector('.btn-deletCart')
    btnVaciar.addEventListener('click', ()=>{
        vaciar()
    })

    }

  

  function vaciar() {
       state.cart = []
       renderCart()
    }