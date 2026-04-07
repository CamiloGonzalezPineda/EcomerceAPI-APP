
export function renderDetails(product) {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    modal.innerHTML = `
        <div class='modal-content'>
            <span class="close">&times;</span>
            <img src="${product.image}" alt="${product.title}" width="300">
            <h2>${product.title}</h2>
            <p>Precio: $${product.price}</p>
            <p>Categoría: ${product.category}</p> 
            <button id="add" class="btn-add" data-id="${product.id}">Add Product</button>

        </div>
    `
    document.body.appendChild(modal)


    document.body.style.overflow = 'hidden'

    modal.querySelector('.close').addEventListener('click', ()=>{
        modal.remove()
    document.body.style.overflow = 'auto'
     
    })

    modal.addEventListener('click', (e)=>{
        if(e.target === modal){
            modal.remove()
          document.body.style.overflow = 'auto'

        }
    })


}