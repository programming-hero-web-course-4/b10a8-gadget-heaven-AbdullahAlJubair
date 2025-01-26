import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <>
            <header className="max-w-[1250px] mx-auto mt-2 rounded-t-2xl overflow-hidden">
                <NavBar></NavBar>
            </header>
            <main className="max-w-[1250px] mx-auto Sora">
                <Outlet></Outlet>
            </main>
            <footer className="mt-48">

            </footer>
        </>
    );
};

export default MainLayout;