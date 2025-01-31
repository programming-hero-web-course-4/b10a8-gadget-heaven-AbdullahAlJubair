import { NavLink, Outlet } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";

const Dashboard = () => {
    return (
        <div>
            <div className="Accent pt-8 pb-8">
                <PageHeader
                    title={'Dashboard'}
                    subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </PageHeader>
                <div className="flex justify-center gap-x-6 mt-5">
                    <NavLink
                        to="/dashboard/cart"
                        className={({ isActive }) =>
                            `${isActive ? 'bg-white font-extrabold AccentText' : 'border bg-transparent text-white'} text-base py-2 px-7 rounded-4xl`
                        }
                    >Cart</NavLink>
                    <NavLink
                        to={'/dashboard/wishlist'}
                        className={({ isActive }) =>
                            `${isActive ? 'bg-white font-extrabold AccentText' : 'border bg-transparent text-white'} text-base py-2 px-7 rounded-4xl`
                        }
                    >Wishlist</NavLink>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;