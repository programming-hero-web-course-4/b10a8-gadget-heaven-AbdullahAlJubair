import toast from "react-hot-toast";

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
        return;
    }
    else {
        wishlist.push(product_id);
        const myCart = JSON.stringify(wishlist)
        localStorage.setItem('wishlist', myCart);
        toast.success("Product Added to Your Wishlist");
    }
}

//Remove Data from Local Storage
const deleteLSWishlist = (product_id) => {
    const wishlist = getLSWishlistData();
    const filteredId = [...wishlist].filter(id => id !== product_id);
    const myWishlist = JSON.stringify(filteredId)
    localStorage.setItem('wishlist', myWishlist);
    toast.error("Product Removed from Your Wishlist");
}
export { getLSWishlistData, addToLSWishlist, deleteLSWishlist }