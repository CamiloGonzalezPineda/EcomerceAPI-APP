import { state } from "../State/store.js"
import { renderproductos } from "./renderProducts.js"

export function filterCategory(category) {
    const  filtered =  state.products.filter(product => product.category === category)
    renderproductos(filtered)
} 