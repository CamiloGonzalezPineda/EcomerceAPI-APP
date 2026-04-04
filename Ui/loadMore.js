import { state } from "../State/store.js";
import { getProducts } from "../Api/api.js";
import { renderproductos } from "./renderProducts.js";

export async function loadMoreProducts() {
    state.skip += state.limit

    const {products, total} = await getProducts(state.limit, state.skip)
     state.products = [...state.products, ...products]
     state.total = total
     const btnMore = document.getElementById('loadMore')
     if(state.products.length >= state.total) {
    btnMore.disabled =true
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