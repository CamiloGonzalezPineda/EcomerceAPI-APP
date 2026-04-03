export function renderproductos(products) {
    const container = document.getElementById('products')

    container.innerHTML = products.map(product =>`
    <div class="card">
    <img src="${product.image}" alt="${product.title}">
    <h2> ${product.title}</h2>
    <p>Price: $${product.price}</p>
    </div>
    `).join('') 
    
}


