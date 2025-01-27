import PropTypes from "prop-types";
import ReactStars from "react-stars";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { addToLSCart } from "../../utilities/utilities";

const CardDetails = ({ product }) => {
    const { product_id, product_title, product_image, price, description, specification, availability, rating } = product;
    const handleAddToCart = (id)=> {
        addToLSCart(id); 
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
                    <button onClick={()=>handleAddToCart(product_id)} className="Accent flex gap-x-2.5 items-center cursor-pointer px-6 py-2.5 rounded-4xl text-base md:text-lg text-white font-bold">Add to Cart <AiOutlineShoppingCart className="text-xl md:text-2xl" /></button>

                    <button className="border border-base-300 p-3 hover:bg-base-300 rounded-full cursor-pointer"><AiOutlineHeart className="text-xl md:text-2xl text-[#3A3A3A]" /></button>
                </div>

            </div>

        </div>
    );

};

CardDetails.propTypes = {
    product: PropTypes.object
}

export default CardDetails;