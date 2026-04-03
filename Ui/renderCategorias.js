
import { filterCategory } from "./filterProducts.js" 
import { state } from "../State/store.js"
import { renderproductos } from "./renderProducts.js"
 export function renderCategories(categories) {
    const container = document.getElementById('categories')

    container.innerHTML = `<button data-category="all">Todos</button>`+ 
    categories.map(category => `
        <button data-category="${category.slug}">${category.name} </button>
    `).join('')
    
    const buttons = container.querySelectorAll('button')

    buttons.forEach(button =>{

        button.addEventListener('click', ()=>{
                buttons.forEach(btn =>{btn.classList.remove('active')})
                button.classList.add('active')
            const selectCategory = button.dataset.category
            if(selectCategory === 'all'){
                renderproductos(state.products)
            }else{
                filterCategory(selectCategory)
        }
        })
    })

}


