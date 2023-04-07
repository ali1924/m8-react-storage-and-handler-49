const addDbWithObject = (id) => {
    let shoppingCart = {};
    // localStorage.setItem('shopping-cart', shoppingCart);
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    // console.log(storedCart);
    const quantity = shoppingCart[id];
    // console.log(quantity);
    if (quantity) {
        console.log('un')
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        console.log(newQuantity);
    }
    else {
        console.log('de')
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    
}
const removeFromCartDb = (id) => {
    // console.log('remove',id)
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
export { addDbWithObject,removeFromCartDb};