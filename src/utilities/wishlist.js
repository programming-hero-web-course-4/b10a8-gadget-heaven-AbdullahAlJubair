// get Local Storage Data
const getLSWishlistData = () => {
    const prevWishlist = localStorage.getItem('wishlist');
    if (prevWishlist) {
        return JSON.parse(prevWishlist);
    }
    else {
        return [];
    }
}

// Set Local Storage
const addToLSWishlist = (product_id) => {
    const wishlist = getLSWishlistData();
    if (wishlist.includes(product_id)) {
        return alert('Stop Adding Duplicate Item');
    }
    else {
        wishlist.push(product_id);
        const myCart = JSON.stringify(wishlist)
        localStorage.setItem('wishlist', myCart);
    }
}

//Remove Data from Local Storage
const deleteLSWishlist = (product_id) => {
    const wishlist = getLSWishlistData();
    const filteredId = [...wishlist].filter(id => id !== product_id);
    const myWishlist = JSON.stringify(filteredId)
    localStorage.setItem('wishlist', myWishlist);
}
export { getLSWishlistData, addToLSWishlist, deleteLSWishlist }