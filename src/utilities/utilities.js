import toast from "react-hot-toast";

// get Local Storage Data
const getLSCartData = () => {
    const prevCart = localStorage.getItem('cart');
    if (prevCart) {
        return JSON.parse(prevCart);
    }
    else {
        return [];
    }
}

// Set Local Storage
const addToLSCart = (product_id) => {
    const cart = getLSCartData();
    if (cart.includes(product_id)) {
        // return alert('Stop Adding Duplicate Item');
        return toast.error("You Can't Add Same Product Twice in Single Order");
    }
    else {
        cart.push(product_id);
        const myCart = JSON.stringify(cart)
        localStorage.setItem('cart', myCart);
        toast.success("Product Added Successfully in Your Cart")
    }
}

//Remove Data from Local Storage
const deleteLSCart = (product_id) => {
    const cart = getLSCartData();
    const filteredId = [...cart].filter(id => id !== product_id);
    const myCart = JSON.stringify(filteredId)
    localStorage.setItem('cart', myCart);
    toast.success("Product Removed from Your Cart");
}
export { getLSCartData, addToLSCart, deleteLSCart }