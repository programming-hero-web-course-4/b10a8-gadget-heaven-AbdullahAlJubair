import { Outlet } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";

const Dashboard = () => {
    return (
        <div>
            <div className="Accent pt-2 md:pt-8 pb-8">
                <PageHeader
                    title={'Dashboard'}
                    subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}>
                </PageHeader>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;