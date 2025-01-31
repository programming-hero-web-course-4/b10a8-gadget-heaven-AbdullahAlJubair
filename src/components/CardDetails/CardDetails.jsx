import PropTypes from "prop-types";
import ReactStars from "react-stars";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { addToLSCart } from "../../utilities/utilities";
import { useContext, useEffect, useState } from "react";
import { AmountContext } from "../../Layouts/MainLayout/MainLayout";
import { addToLSWishlist, getLSWishlistData } from "../../utilities/wishlist";
import toast from "react-hot-toast";

const CardDetails = ({ product }) => {
    const [amount, setAmount] = useContext(AmountContext);
    const [wishlist, setWishlist] = useState([]);
    const { product_id, product_title, product_image, price, description, specification, availability, rating } = product;

    // Use Effect for get Wishlist Data
    useEffect(() => {
        const isAdded = getLSWishlistData();
        setWishlist(isAdded);
    }, [])

    // Add to Cart Func
    const handleAddToCart = (id, newPrice) => {
        if ((amount + newPrice) > 1000) {
            // return alert('Max Amount Exceed');
            return toast.error("You Can't Add More then $1000 on Your Single Order! ")
        } else {
            addToLSCart(id);
            setAmount(amount + newPrice);
            
        }
    }

    // Add to Wishlist Func
    const handleAddToWishlist = (id) => {
        addToLSWishlist(id);
        setWishlist(getLSWishlistData());
        
    }
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-3 md:p-8 m-2 md:m-8 bg-white rounded-2xl">
            {/* Product Image */}
            <div className="w-full lg:w-2/5 border border-base-300 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover" src={product_image} alt={product_title} />
            </div>
            {/* Product Details */}
            <div className="space-y-4 lg:space-y-3">
                <h2 className="BlackText text-xl md:text-2xl lg:text-[28px] font-semibold">{product_title}</h2>
                <p className="PriceText text-base md:text-xl font-semibold">Price: ${price}</p>
                <span className={`${availability ? 'inStock' : 'outOfStock'} text-sm font-medium py-1.5 px-3.5 rounded-4xl border inline-block`}>{availability ? 'In Stock' : 'Out of Stock'}</span>
                <p className="GrayText text-base md:text-lg font-normal">{description}</p>
                {/* Specification Table */}
                <p className="BlackText text-lg font-bold">Specification</p>
                <div>
                    <table className="table">
                        <tbody>
                            {Array.isArray(specification) && specification.length > 0 ?
                                specification.map((spec, id) => <tr className="bg-base-200" key={id}><th>{spec.key} :</th><td >{spec.value}</td></tr>) : <tr><td>No Specification Available</td></tr>}
                        </tbody>
                    </table>
                </div>
                {/* Ratings Details */}
                <div>
                    <p className="BlackText text-lg font-bold">Rating: </p>
                    {
                        rating ? <div className="flex justify-start items-center gap-x-4">
                            <ReactStars key={product_id} count={5} value={rating} size={30} edit={false} />
                            <span className="bg-[#09080f0d] py-1.5 lg:py-2 px-3 lg:px-3.5 rounded-4xl text-sm font-medium">{rating}</span>
                        </div> : ''
                    }
                </div>
                <div className="flex items-center gap-x-4">
                    <button onClick={() => handleAddToCart(product_id, price)} className={`${availability ? 'Accent cursor-pointer text-white py-2.5' : 'btn btn-disabled py-6'} flex gap-x-2.5 items-center px-6 rounded-4xl text-base md:text-lg font-bold`}>Add to Cart <AiOutlineShoppingCart className="text-xl md:text-2xl" /></button>

                    <button onClick={() => handleAddToWishlist(product_id)} className={`${wishlist.includes(product_id) ? 'btn btn-disabled px-3 py-6' : ' p-3 border border-base-300 hover:bg-base-300 cursor-pointer'} rounded-full`}><AiOutlineHeart className={`${wishlist.includes(product_id ? '' : 'text-[#3A3A3A]')} text-xl md:text-2xl`} /></button>
                </div>

            </div>

        </div>
    );

};

CardDetails.propTypes = {
    product: PropTypes.object
}

export default CardDetails;