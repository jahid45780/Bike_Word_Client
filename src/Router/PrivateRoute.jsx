import { Navigate, useLocation } from "react-router-dom";

import Loader from "../Componts/Loader/Loader";
import useAuth from "../api/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location = useLocation()


    if(loading) return <Loader/>
    if (user) return children
    return (
        <Navigate to='/login' state={{ from:location}} replace ></Navigate>
    );
};

export default PrivateRoute;