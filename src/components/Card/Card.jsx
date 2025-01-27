import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
    const {product_id, product_image, product_title, price } = data;

    return (
        <div className="p-5 md:p-4 lg:p-6 bg-white rounded-2xl flex flex-col gap-y-4 lg:gap-y-6">
            <div className="border border-base-300 rounded-xl overflow-hidden">
                <img className="w-full" src={product_image} alt="" />
            </div>
            <div className="space-y-1 lg:space-y-4 grow">
                <h3 className="BlackText text-lg md:text-xl lg:text-2xl font-semibold">{product_title}</h3>
                <p className="GrayText text-sm md:text-base lg:text-xl font-medium">Price: ${price}</p>
            </div>
            <div>
                <Link to={`/product/${product_id}`}>
                    <button className="AccentText text-sm lg:text-lg font-semibold AccentBorder rounded-4xl cursor-pointer py-2 px-5">View Details</button>
                </Link>
            </div>

        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card;