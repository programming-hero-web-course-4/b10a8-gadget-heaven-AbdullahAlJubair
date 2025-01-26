import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Categories = ({categories}) => {
    return (
        <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl">
            <NavLink className={({isActive})=> `${isActive ? 'Accent text-white' : 'bg-[#09080f0d] GrayText'} py-2.5 px-5 rounded-4xl text-lg`}
                    to={'/'}>All Products</NavLink>
            {
                categories.map(cat => <NavLink className={({isActive})=> `${isActive ? 'Accent text-white' : 'bg-[#09080f0d] GrayText'} py-2.5 px-5 rounded-4xl text-lg`} 
                    key={cat.category} 
                    to={`/category/${cat.category}`}>{cat.category}</NavLink>
                )
            }
        </div>
    );
};

Categories.propTypes = {
    categories : PropTypes.array.isRequired
}

export default Categories;