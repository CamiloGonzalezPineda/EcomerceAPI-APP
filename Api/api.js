

export async function getProducts( limit, skip) {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        if(!response.ok){
            throw new Error('Error al obtener los productos')
        }
        const data = await response.json()
    
        return{
            products: data.products.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.thumbnail,
            category: product.category
        })), 
        total: data.total
    };
    } catch (error) {
        throw error
    }
}

export async function getCategories() {
    try{
        const response = await fetch('https://dummyjson.com/products/categories')

        if(!response.ok){
            throw new Error('Error al obtener las categorias')
        }
        const data = await response.json()
        return data
    }catch(error){
        throw error
    }
}
