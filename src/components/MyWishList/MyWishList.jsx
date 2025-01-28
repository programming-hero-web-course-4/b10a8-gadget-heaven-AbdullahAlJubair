import { useLoaderData } from "react-router-dom";
import { deleteLSWishlist, getLSWishlistData } from "../../utilities/wishlist";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const MyWishList = () => {
    const allProducts = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const wishlistId = getLSWishlistData();
        let wishlistItems = [];
        wishlistId.forEach(id => {
            const checkProduct = [...allProducts].filter( item => item.product_id === id )
            if( checkProduct.length > 0 ){
                wishlistItems.push( checkProduct[0] )
            }
        })
        setProducts(wishlistItems);
    }, [allProducts]);

    const handleRemoveWishlist = (id) => {
        deleteLSWishlist(id);
        const wishlistId = getLSWishlistData();
        let wishlistItems = [];
        wishlistId.forEach(id => {
            const checkProduct = [...allProducts].filter( item => item.product_id === id )
            if( checkProduct.length > 0 ){
                wishlistItems.push( checkProduct[0] )
            }
        })
        setProducts(wishlistItems);
    }

    return (
        <div className="px-2 md:px-5 lg:px-10 space-y-2 md:space-y-6 my-12">
            <h4 className="BlackText text-2xl font-bold">WishList</h4>
            {
                products ? products.map((product, idx) => <ProductCard key={idx} product={product} handleRemove={handleRemoveWishlist} hasAddToCart={true}></ProductCard>) : ''
            }
        </div>
    );
};

export default MyWishList;