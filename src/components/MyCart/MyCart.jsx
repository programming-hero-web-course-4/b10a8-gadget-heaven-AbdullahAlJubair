import SuccessImage from '../../assets/success.png'
import { useContext, useEffect, useState } from "react";
import { AmountContext } from "../../Layouts/MainLayout/MainLayout";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";
import { getLSCartData } from "../../utilities/utilities";
import ProductCard from "../ProductCard/ProductCard";
import { deleteLSCart } from "../../utilities/utilities";
const MyCart = () => {
    const [amount, setAmount] = useContext(AmountContext);
    const allProducts = useLoaderData();
    const [products, setProducts] = useState([]);
    const [purchaseAmount, setPurchaseAmount] = useState();
    useEffect(() => {
        const cartId = getLSCartData();
        let cartItems = [];
        cartId.forEach(id => {
            const checkProduct = [...allProducts].filter( item => item.product_id === id )
            if( checkProduct.length > 0 ){
                cartItems.push( checkProduct[0] )
            }
        })
        setProducts(cartItems);
        const localStorageAmount = cartItems.reduce((prevAmount, product) => prevAmount + product.price, 0);
        setAmount(localStorageAmount);
    }, [allProducts, setAmount]);

    const handleRemoveProduct = (id, price) => {
        deleteLSCart(id);
        const cartId = getLSCartData()
        let cartItems = [];
        cartId.forEach(id => {
            const checkProduct = [...allProducts].filter( item => item.product_id === id )
            if( checkProduct.length > 0 ){
                cartItems.push( checkProduct[0] )
            }
        })
        setProducts(cartItems);
        setAmount(amount - price);
    }

    const handleSortByPrice = () => {
        const sortByPrice = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortByPrice);
    }

    const handlePurchase = () => {
        setPurchaseAmount(amount);
        document.getElementById('purchaseModal').showModal()
        localStorage.removeItem('cart');
        const cartId = getLSCartData()
        const cartItems = [...allProducts].filter(product => [...cartId].includes(product.product_id));
        setProducts(cartItems);
        const localStorageAmount = cartItems.reduce((prevAmount, product) => prevAmount + product.price, 0);
        setAmount(localStorageAmount);
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
                        <button onClick={handlePurchase} className={`${products.length > 0 ? 'PurchaseBtn cursor-pointer text-white' : 'btn btn-disabled rounded-4xl'} text-sm md:text-base py-2 md:py-2.5 px-5`}>Purchase </button>
                    </div>

                </div>
            </div>
            <div className="space-y-2 md:space-y-6">
                {
                    products ? products.map((product, idx) => <ProductCard key={idx} product={product} handleRemove={handleRemoveProduct} hasAddToCart={false}></ProductCard>) : ''
                }
            </div>

            {/* -----------------------------Modal--------------------------*/}
            <dialog id="purchaseModal" className="modal modal-middle">
                <div className='modal-box flex flex-col items-center'>
                    <img className='w-16 mb-5' src={SuccessImage} alt="" />
                    <h3 className="text-center font-bold text-xl md:text-3xl">Payment Successfull</h3>
                    <div className="divider"></div>
                    <div className='text-center space-y-3'>
                        <p className="text-base md:text-xl">Thanks for purchasing.</p>
                        <p className="text-sm md:text-base font-semibold">Total Amount : <span className='text-green-500'>${purchaseAmount}</span></p>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <Link to={'/'}><button className="btn bg-base-300 px-12">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default MyCart;