import { getProducts, getCategories } from "./Api/api.js";
import { renderproductos } from "./Ui/renderProducts.js";
 import { ShowLoader } from "./Ui/loader.js";
import { showError } from "./Ui/error.js";
import { state } from "../State/store.js";
import { renderCategories } from "./Ui/renderCategorias.js";
import { renderLayout } from "./Ui/renderLayout.js";
import {MoreButton} from "./Ui/loadMore.js";
import { renderCart } from "./Ui/renderCart.js";

export async function init() {

    state.loading = true
    ShowLoader()


    try {
           const categories = await getCategories()
        const {products, total} = await getProducts(state.limit, state.skip)
     
        state.products = products
        state.total = total
        renderLayout()
        renderCategories(categories)
        renderproductos(products)
        renderCart(state.cart)
    } catch (error) {

        state.error = error.message

        showError(state.error)

    }finally{
        
        state.loading = false
    }

}

init()
MoreButton()
   