import { useLoaderData, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
const Cards = () => {
    const { category } = useParams();
    const allProducts = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (category) {
            const filterByCategory = [...allProducts].filter(product => product.category === category )
            setProducts(filterByCategory);
        }
        else {
            setProducts(allProducts);
        }
    }, [allProducts, category])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <Card key={product.product_id} data={product}></Card>)
            }
        </div>
    );
};

export default Cards;