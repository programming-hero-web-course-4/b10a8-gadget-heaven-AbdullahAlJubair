import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import { Helmet } from "react-helmet";

const Home = () => {
    const categories = useLoaderData();
    return (
        <><Helmet>
            <title>Home | Gadget Heaven</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
            <Banner></Banner>
            <h1 className="text-2xl md:text-4xl text-center BlackText font-bold mt-10 md:mt-24 mb-6 md:mb-12 mx-2">Explore Cutting-Edge Gadgets</h1>

            <div className="flex flex-col md:flex-row justify-center gap-6 m-2">
                <div className="w-full md:w-3/12">
                    <Categories categories={categories}></Categories>
                </div>
                <div className="w-full md:w-9/12">
                    <Outlet></Outlet>
                </div>

            </div>

        </>
    );
};

export default Home;