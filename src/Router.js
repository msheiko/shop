import {
    createBrowserRouter,
} from "react-router-dom";

import Products from "./components/products/Index";

export default createBrowserRouter([
    {
        path: "/",
        element: <Products/>,
    },
    {
        path: "/products",

        element: <Products/>,
    }
]);
