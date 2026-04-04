import { state } from '../State/store.js'
import { deleteCart } from './cart.js';
export function renderCart() {
  
    const container = document.getElementById('cart')
    if(!container) return;

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
    
      <button class='btn-deletCart'> Vaciar Carritos </button>  `
    deleteCart()
    }