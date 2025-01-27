import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    const categories = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <h1 className="text-2xl md:text-4xl text-center BlackText font-bold mt-10 md:mt-24 mb-12">Explore Cutting-Edge Gadgets</h1>

            <div className="flex flex-col md:flex-row justify-center gap-6 m-2">
                <div className="w-full md:w-4/5 lg:w-3/5">
                    <Categories categories={categories}></Categories>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>

            </div>

        </>
    );
};

export default Home;