export function getAllCategories(){
return`${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`
}

export function getAllProducts(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products`
}

export function getAllProductsByCategory(category){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products/category/${category}`
}

export function getProductById(id){
    return `https://fakestoreapi.com/products/${id}`
}