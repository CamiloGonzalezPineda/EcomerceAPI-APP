import { state } from "../State/store.js";
import { getProducts } from "../Api/api.js";
import { renderproductos } from "./renderProducts.js";

export async function loadMoreProducts() {

    const {products, total} = await getProducts({
        limit: state.limit,
        skip: state.skip, 
        category: state.category
    })

     state.products = [...state.products, ...products]
     state.total = total
    
     state.skip += state.limit

     const btnMore = document.getElementById('loadMore')

     if(state.products.length >= state.total) {
    btnMore.textContent = 'No exist more Products'
    btnMore.disabled =true

}else{
    btnMore.textContent = 'Load More'
    btnMore.disabled = false
}
     renderproductos(state.products)

}


export function MoreButton() {

const btnMore = document.getElementById('loadMore')
if(!btnMore) {
    console.log('Boton no encontrado');
    return
}

btnMore.addEventListener('click', loadMoreProducts)

}