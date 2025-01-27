import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../../components/CardDetails/CardDetails";
import PageHeader from "../PageHeader/PageHeader";

const ProductDetails = () => {
    const allProducts = useLoaderData();
    const pathId = useParams();
    const id = Number(pathId.id)
    const [product, setProduct] = useState({});

    useEffect(() => {
        const myProduct = allProducts.find(product => product.product_id === id);
        setProduct(myProduct);
    }, [allProducts, id])
    return (
        <div>
            <div className="Accent pt-8 pb-60 rounded-b-2xl">
                <PageHeader
                    title={'Product Details'}
                    subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></PageHeader>
            </div>
            <div className="-mt-54">
                <CardDetails product={product}></CardDetails>
            </div>
        </div>
    );
};

export default ProductDetails;