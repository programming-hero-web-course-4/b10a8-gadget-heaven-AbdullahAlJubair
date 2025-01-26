import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    const categories = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <h1 className="text-4xl text-center BlackText font-bold mt-24 mb-12">Explore Cutting-Edge Gadgets</h1>

            <div className="flex justify-center gap-6">
                <div className="w-3/5 ">
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