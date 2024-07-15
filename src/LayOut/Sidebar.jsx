import { useState } from 'react'
// Components

import { AiOutlineBars } from 'react-icons/ai'
import { GrLogout } from 'react-icons/gr'
import { ImProfile } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom'
import UseAdmin from '../Hooks/UseAdmin'




// Icons




const Sidebar = () => {
  

//   const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)


  const [isAdmin] = UseAdmin()


  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
            <Link to='/' >
     <h1 className=" text-3xl" > <span className=" text-6xl font-bold text-fuchsia-400" >
      B</span><span className=" shadow-2xl shadow-rose-900 font-bold" >ike World</span> </h1>
     </Link>
            </div>
          </div>

          {/* Nav Items */}

        {
          isAdmin ? <>

       <div className=' text-lg bg-orange-300 text-center p-2 rounded-xl mt-2' >
          <NavLink to='/dashboard/user' > All User </NavLink> 
         </div>

         <div className=' text-lg bg-orange-300 text-center p-2 rounded-xl mt-2' >
          <NavLink to='/dashboard/cart' > MY Booking Bike  </NavLink> 
         </div>

         <div className=' text-lg bg-orange-300 text-center p-2 rounded-xl mt-2' >
          <NavLink to='/dashboard/addProduct' > Add Product </NavLink> 
         </div>
             
           </> :

           <>
            <div className=' text-lg bg-orange-300 text-center p-2 rounded-xl mt-2' >
          <NavLink to='/dashboard/cart' > MY Booking Bike </NavLink> 
         </div>


         
           </>
        }
        
        </div>

        <div>
          <hr />

         <Link to='/dashboard/profile' >
         <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <ImProfile className='w-5 h-5' />
              
            <span className='mx-4 font-medium'> Profile </span>
          </button>
         </Link>

          
          <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <GrLogout className='w-5 h-5' />
             
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar