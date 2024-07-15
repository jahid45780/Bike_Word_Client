import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AiFillDelete, AiOutlineUser } from "react-icons/ai";
import toast from "react-hot-toast";


const AllUser = () => {

    const axiosSecure = UseAxiosSecure()

    const {data: users= [], refetch} = useQuery({
         queryKey:['users'],
         queryFn: async ()=>{
            const result = await axiosSecure.get('/users')
            return result.data
         }
  })


  const handleMakeAdmin = user =>{
     axiosSecure.patch(`/users/admin/${user._id}`)
     .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0 ){
            refetch()
            toast.success(`${user.email} Is Now Admin `)
        }
     })
  }

  const handleDeleteUser = user =>{
    axiosSecure.delete(`/users/${user._id}`)
    .then(res=>{
       if(res.data.deletedCount> 0){
        refetch()
          toast((t) => (
              <span className=" text-2xl text-orange-500 shadow-2xl shadow-red-500" >
                 Successfully Deleted User <br />
                <button className=" btn text-center mx-auto mt-3" onClick={() => toast.dismiss(t.id)}>
                  Dismiss
                </button>
              </span>
            ));
       }
    })

    
}


    return (
        <div>
            alll user{users.length}


            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Photo</th>
        <th>Email</th>
        <th> Role </th>
        <th> Action </th>
      </tr>
    </thead>
    <tbody>

        {
            users.map((user, index) =>  <tr key={user._id} >
                <th> {index + 1} </th>
                <td> <img className=" w-20 h-20 rounded-full" src={user.photo} alt="" /> </td>
                <td> {user.email} </td>
               
                <td>

               { user.role === 'admin' ? 'Admin' : <button 
               onClick={()=> handleMakeAdmin(user) }
               className=" hover:text-red-600 text-4xl "> <AiOutlineUser></AiOutlineUser> 
               </button>}
              
                </td>
               
                <td>
                <button 
             onClick={ ()=> handleDeleteUser(user) } 
              className=" hover:text-red-600 text-4xl "> <AiFillDelete></AiFillDelete> </button>
                </td>
              </tr> )
        }
      {/* row 1 */}
     
        
    </tbody>
  </table>
</div>
                      
            
        </div>
    );
};

export default AllUser;