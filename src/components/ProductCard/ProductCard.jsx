import PropTypes from "prop-types";
import { CiCircleRemove } from "react-icons/ci";


const ProductCard = ({ product, handleRemoveProduct }) => {
    const { product_id, product_title, product_image, price, description } = product;

    
    return (
        <div className="flex justify-between items-center bg-white rounded-lg md:rounded-2xl px-2 py-3 md:p-8">
            <div className="flex justify-center items-center gap-x-2 md:gap-x-8">
                {/* Product Image */}
                <div className="max-w-[70px] md:max-w-[200px] border border-base-300 rounded-lg md:rounded-2xl overflow-hidden">
                    <img className="w-full object-cover py-0 md:py-3" src={product_image} alt={product_title} />
                </div>

                {/* Product Details */}
                <div className="space-y-1 md:space-y-2 lg:space-y-5">
                    <h4 className="BlackText text-lg md:text-2xl font-semibold">{product_title}</h4>
                    <p className="GrayText text-xs md:text-lg font-normal hidden md:block">{description}</p>
                    <p className="PriceText text-xs md:text-xl font-semibold">Price: ${price}</p>
                </div>
            </div>
            {/* Remove Button */}
            <button onClick={() => handleRemoveProduct(product_id, price)} className="cursor-pointer">
                <CiCircleRemove className="text-2xl md:text-4xl text-red-600" />
            </button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleRemoveProduct : PropTypes.func.isRequired,
}

export default ProductCard;