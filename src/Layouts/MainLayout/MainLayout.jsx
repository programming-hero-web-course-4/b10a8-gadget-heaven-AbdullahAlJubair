import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <>
            <main className="max-w-[1250px] mx-auto mt-1 lg:mt-2 Sora rounded-xl md:rounded-t-2xl overflow-hidden">
                <NavBar></NavBar>
                <Outlet></Outlet>
            </main>
            <footer className="mt-48">

            </footer>
        </>
    );
};

export default MainLayout;