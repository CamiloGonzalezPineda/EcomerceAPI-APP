
import { renderDetails } from "./renderDetailsProduct.js";
export function renderproductos(products) {
    const container = document.getElementById('products')

    container.innerHTML = products.map(product =>`
    <div class="card">
    <img src="${product.image}" alt="${product.title}">
    <h2> ${product.title}</h2>
    <p>Price: $${product.price}</p>
    <div class='btns-addDts'> 
    <button id="detail" class='View-detail'>Details </button>
    <button id="add" class="btn-add" data-id="${product.id}">Add Product</button>
    </div>

    </div>

    `).join('') 
    
    container.querySelectorAll('.View-detail').forEach((btn, i)=>{
        btn.addEventListener('click', ()=> renderDetails(products[i]))
    })
  

}
