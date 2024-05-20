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

export function signUp(){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/users`
}

export function signin(){
    return   `${import.meta.env.VITE_FAKE_STORE_URL}/auth/login`
}

export function addNewProduct(){
    return  `${import.meta.env.VITE_FAKE_STORE_URL}/carts`
}

export function getUserCart(id){
    return `${import.meta.env.VITE_FAKE_STORE_URL}/carts/user/${id}`
}