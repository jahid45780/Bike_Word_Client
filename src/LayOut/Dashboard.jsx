// import { Outlet } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// import { NavLink, Outlet } from "react-router-dom";

                                                      
const Dashboard = () => {
    
    return (
//        

<div className=" relative min-h-max md:flex" >
{/* slider side */}  <Sidebar/>
<div className=" flex-1 md:ml-64" >
    <div className=" p-5" >  {/* out let from dainamic contact */}  <Outlet></Outlet> </div>
</div>
</div>




    );
};

export default Dashboard;