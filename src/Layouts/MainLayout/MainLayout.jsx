import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { createContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

export const AmountContext = createContext();
const MainLayout = () => {
    const [amount, setAmount] = useState(0);
    return (
        <>
            <Helmet>
                <title>Home | Gadget Heaven</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Toaster />
            <main className="max-w-[1250px] mx-auto mt-0 lg:mt-1.5 Sora rounded-none lg:rounded-t-2xl overflow-hidden">
                <AmountContext.Provider value={[amount, setAmount]}>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </AmountContext.Provider>
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;