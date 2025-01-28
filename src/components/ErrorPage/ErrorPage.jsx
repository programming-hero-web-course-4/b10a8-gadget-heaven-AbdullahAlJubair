import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="Accent h-screen flex flex-col justify-center items-center gap-y-10 p-4">
            <h1 className="text-7xl md:text-9xl font-black text-white">Oops!</h1>
            <div className="Sora text-center space-y-4">
                <p className="text-xl md:text-2xl font-bold text-white">404 - PAGE NOT FOUND</p>
                <p className="text-xs md:text-base text-white">The page you are looking for might have been removed <br className="hidden md:block" /> or had its name changed or its temporarily unavailable.
                </p>
            </div>
            <Link to={'/'}>
                <button className="text-base md:text-xl text-white hover:text-[#9538E2] font-bold border border-base-300 py-3 px-6 rounded-4xl cursor-pointer hover:bg-base-300">GO TO HOMEPAGE</button>
            </Link>
        </div>
    );
};

export default ErrorPage;