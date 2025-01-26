import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
    const {product_image, product_title, price } = data;

    return (
        <div className="p-6 bg-white rounded-2xl flex flex-col gap-y-6">
            <div className="rounded-xl overflow-hidden">
                <img className="w-full" src={product_image} alt="" />
            </div>
            <div className="space-y-4 grow">
                <h3 className="BlackText text-2xl font-semibold">{product_title}</h3>
                <p className="GrayText text-xl font-medium">Price: ${price}</p>
            </div>
            <div>
                <Link to={`/category/product/${product_title}`}>
                    <button className="AccentText text-lg font-semibold AccentBorder rounded-4xl cursor-pointer py-2 px-5">View Details</button>
                </Link>
            </div>

        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card;