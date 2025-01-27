import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cards from "../components/Cards/Cards";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import MyCart from "../components/MyCart/MyCart";
import MyWishList from "../components/MyWishList/MyWishList";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Cards />,
            loader: () => fetch('../allProducts.json')
          },
          {
            path: "/category/:category",
            element: <Cards />,
            loader: () => fetch('../allProducts.json')
          },
        ]
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <MyCart />,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: "/dashboard/wishlist",
            element: <MyWishList />,
            loader: () => fetch('../allProducts.json'),
          },
        ]
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../allProducts.json')
      }
    ]
  },
]);

export default routes;