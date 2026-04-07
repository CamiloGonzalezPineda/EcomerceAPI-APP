import { state } from "../State/store.js"
import { renderproductos } from "./renderProducts.js"


export function filterForName(e) {
   

    const search = e.target.value.trim().toLowerCase()
    
    let filter = state.products
    if(search !== ''){
        filter = filter.filter(product => product.title.toLowerCase().includes(search))}

    renderproductos(filter)

}


export function busqueda(){
 const searchInput = document.querySelector('.searchInput')
searchInput.addEventListener('input', filterForName)

}