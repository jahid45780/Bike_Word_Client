import useAuth from "../../../api/useAuth";


const Profile = () => {
   const {user} = useAuth()
    return (
     <div>

<div className='flex justify-center items-center h-screen'>
   
   <div className=' bg-slate-100 shadow-lg rounded-2xl w-3/5'>
     <img
       alt='profile'
       src='https://i.ibb.co/kJ4bZL1/Green-and-White-Nature-Thank-You-Facebook-cover.png'
       className='w-full mb-4 rounded-t-lg h-36'
     />
     <div className='flex flex-col items-center justify-center p-4 -mt-16'>
       <a href='#' className='relative block'>
         <img
           alt='profile'
           src={user?.photoURL}
           className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
         />
       </a>

      
       <p className='mt-2 text-xl text-orange-950 font-medium '>
         User Id: {user?.uid}
       </p>
       <div className='w-full p-2 mt-4 rounded-lg'>
         <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
           <p className='flex flex-col'>
             Name
             <span className='font-bold text-black '>
               {user?.displayName}
             </span>
           </p>
           <p className='flex flex-col'>
             Email <br />
             <span className=" font-bold" > {user?.email} </span>
             <span className='font-bold text-black '></span>
           </p>

           <div>
         {/*  */}
         
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

     </div>
    );
};

export default Profile;