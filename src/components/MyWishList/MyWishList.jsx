import { useLoaderData } from "react-router-dom";

const MyWishList = () => {
    const allProducts = useLoaderData();
    console.log(allProducts);
    return (
        <div>
            
        </div>
    );
};

export default MyWishList;