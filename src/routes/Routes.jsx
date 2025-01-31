import { createBrowserRouter, Navigate, } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cards from "../components/Cards/Cards";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import MyCart from "../components/MyCart/MyCart";
import MyWishList from "../components/MyWishList/MyWishList";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Cards />,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: "/category/:category",
            element: <Cards />,
            loader: () => fetch('../allProducts.json'),
          },
        ]
      },
      {
        path: "/about_us",
        element: <AboutUs />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true, 
            element: <Navigate to="cart" replace />,
          },
          {
            path: "cart",
            element: <MyCart />,
            loader: () => fetch('../allProducts.json'),
          },
          {
            path: "wishlist",
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