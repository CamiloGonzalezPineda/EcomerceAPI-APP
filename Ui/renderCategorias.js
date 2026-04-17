
import { filterCategory } from "./filterProducts.js" 
 export function renderCategories(categories) {
    const container = document.getElementById('categories')

    container.innerHTML = `<button data-category="all">All</button>`+ 
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
                filterCategory(null)
                
            }else{
                filterCategory(selectCategory)
        }
        })
    })

}


