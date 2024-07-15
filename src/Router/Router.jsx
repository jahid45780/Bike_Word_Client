import {
    createBrowserRouter,


  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Componts/Login/Login";
import SingUp from "../Componts/SingUp/SingUp";
import ErrorPage from "../Componts/Shari/Error/Error";
import Product from "../Pages/Product/Product";
import ProductDetail from "../Pages/Product/ProductDetail";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Profile from "../Componts/Shari/Profile/Profile";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'product/:id',
          element:<Product></Product>,

        },
        {
           path:'/detail/:id',
           element:<ProductDetail></ProductDetail>,
           loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SingUp></SingUp>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
      },
      {
        path:'user',
        element:<AllUser></AllUser>
      },
      {
        path:'addProduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'profile',
        element:<Profile/>
      }
    ]
      
    }
  ]);