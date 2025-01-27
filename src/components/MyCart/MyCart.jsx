import { useContext, useEffect, useState } from "react";
import { AmountContext } from "../../Layouts/MainLayout/MainLayout";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";
import { getLSCartData } from "../../utilities/utilities";
import ProductCard from "../ProductCard/ProductCard";
import { deleteLSCart } from "../../utilities/utilities";
const MyCart = () => {
    const [amount, setAmount] = useContext(AmountContext);
    const allProducts = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const cartId = getLSCartData();
        const cartItems = [...allProducts].filter(product => [...cartId].includes(product.product_id));
        setProducts(cartItems);
        const localStorageAmount = cartItems.reduce((prevAmount, product) => prevAmount + product.price, 0);
        setAmount(localStorageAmount);
    }, [allProducts, setAmount]);


    const handleRemoveProduct = (id, price) => {
        deleteLSCart(id, allProducts);
        const cartId = getLSCartData()
        const cartItems = [...allProducts].filter(product => [...cartId].includes(product.product_id));
        setProducts(cartItems);
        setAmount(amount - price);
    }

    const handleSortByPrice = () => {
        const sortByPrice = [...products].sort((a, b)=> b.price - a.price); 
        setProducts(sortByPrice);
        console.log( 'sorted' ,sortByPrice);
        console.log(products);
    }

return (
    <div className=" px-2 md:px-5 lg:px-10">
        <div className="flex flex-col md:flex-row gap-y-6 justify-between items-center my-6 md:my-12">
            <div>
                <h4 className="BlackText text-2xl font-bold">Cart</h4>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <h4 className="BlackText text-2xl font-bold">Total Cost: {amount}</h4>
                <div className="flex justify-center items-center gap-6">
                    <button onClick={handleSortByPrice} className={`${products.length > 0 ? " AccentText AccentBorder cursor-pointer" : "btn btn-disabled border"} text-sm md:text-base font-semibold rounded-4xl flex items-center gap-x-1 md:gap-x-2.5 py-2 md:py-2.5 px-3.5 md:px-5`}>Sort by Price <HiOutlineAdjustmentsVertical className="text-base md:text-2xl" /></button>
                    <button className={`${products.length > 0 ? 'PurchaseBtn cursor-pointer text-white' : 'btn btn-disabled rounded-4xl'} text-sm md:text-base py-2 md:py-2.5 px-5`}>Purchase </button>
                </div>

            </div>
        </div>
        <div className="space-y-2 md:space-y-6">
            {
                products ? products.map((product, idx) => <ProductCard key={idx} product={product} handleRemoveProduct={handleRemoveProduct}></ProductCard>) : ''


            }
        </div>

    </div>
);
};

export default MyCart;