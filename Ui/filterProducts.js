import { state } from "../State/store.js"
import { loadMoreProducts } from "./loadMore.js"

export function filterCategory(category) {
  state.category = category
  state.skip = 0
  state.products = []

  loadMoreProducts()
} 