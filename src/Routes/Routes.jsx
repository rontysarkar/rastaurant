import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../LayOut/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
        },
        {
          path:'/order/:category',
          element:<Order/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'secret',
          element:<PrivateRoutes><Secret/></PrivateRoutes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'carts',
          element:<Carts/>
        },
        // Add Main Routes
        {
          path:'allUsers',
          element:<AllUsers/>
        }
      ]
    }
  ]);