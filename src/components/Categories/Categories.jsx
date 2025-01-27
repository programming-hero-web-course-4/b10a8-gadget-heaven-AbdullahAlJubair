import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Categories = ({ categories }) => {
    return (
        <>
            <div className="grid grid-cols-2 md:flex md:flex-col gap-4 lg:gap-6 bg-white p-3 lg:p-6 rounded-2xl">
                <NavLink className={({ isActive }) => `${isActive ? 'Accent text-white' : 'bg-[#09080f0d] GrayText'} py-2 lg:py-2.5 pl-4 md:px-5 rounded-4xl text-xs lg:text-lg`}
                    to={'/'}>All Products</NavLink>
                {
                    categories.map(cat => <NavLink className={({ isActive }) => `${isActive ? 'Accent text-white' : 'bg-[#09080f0d] GrayText'} py-2 lg:py-2.5 pl-4 md:px-5 rounded-4xl text-xs lg:text-lg`}
                        key={cat.category}
                        to={`/category/${cat.category}`}>{cat.category}</NavLink>
                    )
                }
            </div>
        </>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Categories;