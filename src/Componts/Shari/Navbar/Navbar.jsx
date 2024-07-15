import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdRoundaboutRight } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { PiUserSwitchThin } from "react-icons/pi";
import useAuth from "../../../api/useAuth";
import toast from "react-hot-toast";
import { LuShoppingCart } from "react-icons/lu";
import Usecard from "../../../Pages/BikeCard/Usecard";
const Navbar = () => {


  const { user, logOut } = useAuth()
  const [cart] = Usecard()
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    toast.success(' LogOut Successfully ')
    .error(error =>{error})
}

  const NavLink=<>
  

  <div className=" group  flex cursor-pointer flex-col" >
     
     <Link to='/' > <li className=" text-2xl mx-2 mt-2 text-center text-black" > Home </li> </Link>
         <span> <FaHome className=" text-3xl lg:ml-6 ml-28" /> </span>
         <span className="h-[3px] w-0 rounded-full bg-black  transition-all duration-300 group-hover:w-full text-center" ></span>
         </div>


         <div className=" group  flex cursor-pointer flex-col" >
     
     <Link to='/' > <li className=" text-2xl mx-2 mt-2 text-black text-center" > About </li> </Link>
        <span> <MdRoundaboutRight className=" text-3xl lg:ml-7 ml-28" /> </span>
         <span className="h-[3px] w-0 rounded-full bg-black   transition-all duration-300 group-hover:w-full" ></span>
         </div>


         <div className=" group  flex cursor-pointer flex-col" >
     
     <Link to='/' > <li className=" text-2xl mx-2 mt-2 text-center text-black" > Service </li> </Link>
     <span> <FaServicestack className=" text-3xl lg:ml-8 ml-28" /> </span>
         <span className="h-[3px] w-0 rounded-full bg-black   transition-all duration-300 group-hover:w-full" ></span>
         </div>


        
  
  
  </>

    return (
        <div>
  <div className="navbar bg-white fixed z-10 bg-opacity-70">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-t-[50px] rounded-br-3xl shadow-2xl shadow-emerald-700 w-72 p-3 mt-9 ml-5">
  
     
        {NavLink}
        
      </ul>
    </div>
     <Link to='/' >
     <h1 className=" text-3xl" > <span className=" text-6xl font-bold text-fuchsia-400" >
      B</span><span className=" shadow-2xl shadow-rose-900 font-bold" >ike World</span> </h1>
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
{NavLink}

    </ul>
  </div>
  <div className="navbar-end">
   {/*shpoing card  */}
<div>
<Link to='/dashboard/cart' >

<button className="btn">
  <LuShoppingCart className=" text-lg" />
  <div className="badge badge-secondary">+{cart.length}</div>
</button>

</Link>
    
</div>


 {
                   user ? (<div className="dropdown  dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                          </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-orange-200 rounded-box w-60">
                          <li>
                            <a className="justify-between">
                              Profile
                              <span> <img className=" w-7 h-7 rounded-full" src={user?.photoURL} alt="" /> </span>
                            </a>
                            <p className=" text-xl p-3 " > {user?.displayName} </p>
                            <p className=" -ml-2  p-3 " > {user?.email} </p>
                           
                          </li>
                          <button onClick={ handleLogOut } className=" btn btn-secondary mr-4 " > Log Out </button>
                     
                        </ul>
                       
                      </div>)
                              
                       : (<Link to='/login' > <button> < PiUserSwitchThin className=" text-5xl" /> </button> </Link>  )
                         
                    }
        
    
  </div>
</div>          



      


        </div>
    );
};

export default Navbar;