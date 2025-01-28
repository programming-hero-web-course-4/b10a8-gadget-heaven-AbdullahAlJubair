import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import { AmountContext } from "../../Layouts/MainLayout/MainLayout";
import { addToLSCart, getLSCartData } from "../../utilities/utilities";


const ProductCard = ({ product, handleRemove, hasAddToCart }) => {
    const [amount, setAmount] = useContext(AmountContext);
    const [isHave, setIsHave] = useState(false);
    const { product_id, product_title, product_image, price, description } = product;

    useEffect(() => {
        const lsCartData = getLSCartData();
        if (lsCartData.includes(product_id)) {
            setIsHave(true);
        }
    }, [product_id])
    console.log(isHave);

    // Add to Cart Func
    const handleAddToCart = (id, price) => {
        const lsCartData = getLSCartData();
        console.log(typeof lsCartData);
        if ((amount + price) > 1000) {
            return alert('Max Amount Exceed');
        } else {
            if (lsCartData.includes(id)) {
                return alert('no');
            } else {
                addToLSCart(id);
                setAmount(amount + price);
                handleRemove(id);
            }
        }
    }

    return (
        <div className="flex justify-between items-center bg-white rounded-lg md:rounded-2xl px-2 py-3 md:p-8">
            <div className="flex justify-center items-center gap-x-2 md:gap-x-8">
                {/* Product Image */}
                <div className="max-w-[70px] md:max-w-[200px] border border-base-300 rounded-lg md:rounded-2xl overflow-hidden">
                    <img className="w-full object-cover py-0 md:py-3" src={product_image} alt={product_title} />
                </div>

                {/* Product Details */}
                <div className={`space-y-1 md:space-y-2  ${hasAddToCart ? 'lg:space-y-2' : 'lg:space-y-5'}`}>
                    <h4 className="BlackText text-sm md:text-2xl font-semibold">{product_title}</h4>
                    <p className="GrayText text-xs md:text-lg font-normal hidden md:block">{description}</p>
                    <p className="PriceText text-xs md:text-xl font-semibold">Price: ${price}</p>
                    {
                        hasAddToCart && 
                    <>
                        {isHave ? <p className="AccentText text-[8px] md:text-sm font-bold">Already Added to the Cart</p> :
                            <button onClick={() => handleAddToCart(product_id, price)} className={`${(amount + price) > 1000 ? 'btn btn-disabled' : 'Accent text-white cursor-pointer'} flex gap-x-1.5 items-center px-3 py-1.5 rounded text-xs md:text-sm  font-semibold`}>Add to Cart <AiOutlineShoppingCart className="text-sm md:text-lg" /></button>
                    }
                    </>
                    }
                    

                </div>
            </div>
            {/* Remove Button */}
            <button onClick={() => handleRemove(product_id, price)} className="cursor-pointer">
                <CiCircleRemove className="text-2xl md:text-4xl text-red-600" />
            </button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
    hasAddToCart: PropTypes.bool.isRequired,
}

export default ProductCard;