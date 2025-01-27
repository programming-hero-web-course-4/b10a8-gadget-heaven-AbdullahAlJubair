import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart  } from "react-icons/ai";
const NavBar = () => {
    return (
        <div className="navbar Accent Sora py-5 px-2 md:px-5 lg:px-10">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-transparent border-0 shadow-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#fff">
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
                        <NavLink className={({isActive})=> isActive ? 'font-bold' : ''} to={'/'}> Home</NavLink>
                        <NavLink className={({isActive})=> isActive ? 'font-bold' : ''} to={'/statistics'}> Statistics</NavLink>
                        <NavLink className={({isActive})=> isActive ? 'font-bold' : ''} to={'/dashboard'}> Dashboard</NavLink>
                    </ul>
                </div>
                <a className="text-lg md:text-xl text-white font-semibold md:font-bold w-full">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-10 text-base text-white">
                    <NavLink className={({isActive})=> isActive ? 'font-bold' : ''} to={'/'}> Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'font-bold' : ''} to={'/statistics'}> Statistics</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'font-bold' : ''} to={'/dashboard'}> Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-x-2 md:gap-x-4">
                <div className=" p-2 md:p-2.5 text-base bg-white rounded-full"><AiOutlineShoppingCart /></div>
                <div className=" p-2 md:p-2.5 text-base bg-white rounded-full"><AiOutlineHeart /></div>
                
                
            </div>
        </div>
    );
};

export default NavBar;