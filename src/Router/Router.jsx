import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Componts/Login/Login";
import SingUp from "../Componts/SingUp/SingUp";
import ErrorPage from "../Componts/Shari/Error/Error";


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
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SingUp></SingUp>
        }
      ]
    },
  ]);