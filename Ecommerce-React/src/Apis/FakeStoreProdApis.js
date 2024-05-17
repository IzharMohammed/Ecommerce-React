export function getAllCategories(){
return`${import.meta.env.VITE_FAKE_STORE_URL}/products/categories`
}

export function getAllProducts(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/products`
}

export function getAllProductsByCategory(category){
    return `C/products/category/${category}`
}

export function getProductById(id){
    return `https://fakestoreapi.com/products/${id}`
}

export function signUp(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`
}

export function signin(){
    return   `${import.meta.env.VITE_FAKE_STORE_URL}/auth/login`
}