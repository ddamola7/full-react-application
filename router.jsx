import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/Home";
import Product from "./src/pages/Product"




const router= createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/> },
            {path: 'product', element: <Product/>},
           
            

        ]

    }

])

export default router;