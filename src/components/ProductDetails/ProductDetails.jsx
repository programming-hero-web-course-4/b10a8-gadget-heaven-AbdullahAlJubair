import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../../components/CardDetails/CardDetails";

const ProductDetails = () => {
    const allProducts = useLoaderData();
    const pathId = useParams();
    const id = Number(pathId.id) 
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const myProduct = allProducts.find(product => product.product_id === id);
        setProduct(myProduct);
    },[allProducts, id])
    return (
        <div>
            <CardDetails product={product}></CardDetails>
        </div>
    );
};

export default ProductDetails;