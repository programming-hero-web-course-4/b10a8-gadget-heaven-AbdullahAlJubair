import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
const NavBar = () => {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <div className={`${pathName === '/' || pathName === '/category/Laptops' || pathName === '/category/Phones' || pathName === '/category/Accessories' || pathName === '/category/Smart%20Watches' || pathName === '/category/Macbook' || pathName === '/category/iPhones' ? 'Accent py-5' : 'bg-[#f6f6f6] py-1 md:py-5'} navbar Sora py-1 px-2 md:px-5 lg:px-10`}>
            {/* <div className="Accent navbar Sora py-5 px-2 md:px-5 lg:px-10"> */}
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-0 shadow-none lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={`${pathName === '/' ? '#fff' : '#9538E2'}`}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to={'/'}> Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to={'/about_us'}> About Us</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to={'/dashboard'}> Dashboard</NavLink>
                    </ul>
                </div>
                <div className="w-full">
                    <Link to={'/'} className={`${pathName === '/' || pathName === '/category/Laptops' || pathName === '/category/Phones' || pathName === '/category/Accessories' || pathName === '/category/Smart%20Watches' || pathName === '/category/Macbook' || pathName === '/category/iPhones' ? 'text-white' : 'AccentText'} text-lg md:text-xl font-semibold md:font-bold`}>Gadget Heaven</Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={`menu menu-horizontal px-1 gap-x-10 text-base ${pathName === '/' || pathName === '/category/Laptops' || pathName === '/category/Phones' || pathName === '/category/Accessories' || pathName === '/category/Smart%20Watches' || pathName === '/category/Macbook' || pathName === '/category/iPhones' ? 'text-white' : 'AccentText'}`}>
                    <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to={'/'}> Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to={'/about_us'}> About Us</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to={'/dashboard'}> Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-x-2 md:gap-x-4">
                <Link to={'/dashboard'}>
                    <div className=" p-2 md:p-2.5 text-base bg-white rounded-full cursor-pointer"><AiOutlineShoppingCart />
                    </div>
                </Link>
                <Link to={'/dashboard/wishlist'}>
                    <div className=" p-2 md:p-2.5 text-base bg-white rounded-full cursor-pointer">
                        <AiOutlineHeart />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;