import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { createContext, useState } from "react";

export const AmountContext = createContext();
const MainLayout = () => {
    const [amount, setAmount] = useState(0);
    return (
        <>
            <main className="max-w-[1250px] mx-auto mt-1 lg:mt-2 Sora rounded-xl md:rounded-t-2xl overflow-hidden">
                <AmountContext.Provider value={[amount, setAmount]}>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                </AmountContext.Provider>
            </main>
            <footer className="mt-48">

            </footer>
        </>
    );
};

export default MainLayout;