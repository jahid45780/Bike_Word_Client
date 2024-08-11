import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";


const AllBike = () => {
    const axiosSecure = UseAxiosSecure()

const {data: product= [],refetch} = useQuery({
     queryKey:['product'],
     queryFn: async()=>{
         const result = await axiosSecure.get('/product')
         return result.data
     }
})

const handleDelete = id =>{
    axiosSecure.delete(`/product/${id}`)
    .then(res=>{
       if(res.data.deletedCount> 0){
          toast((t) => (
              <span className=" text-2xl text-orange-500 shadow-2xl shadow-red-500" >
                 Successfully Deleted Your  Bike <br />
                <button className=" btn text-center mx-auto mt-3" onClick={() => toast.dismiss(t.id)}>
                  Dismiss
                </button>
              </span>
            ));
       }
    })

    refetch()
}

   return (
        <div className="" >
              <h1 className=" text-4xl text-center font-medium mt-3" > Admin Panel </h1>
        <div>
        {
                 <div className="overflow-x-auto  ">
                 <table className="table w-full ">
                   {/* head */}
                   <thead>
                     <tr>
                       <th>
                         <label>
                        Brand
                         </label>
                       </th>
                       <th>Image</th>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     {
                       product.map((item)=>  <tr key={item._id} >
                           <th>
                              {item.brand}
                           </th>
                           <td>
                             <div className="flex items-center gap-3">
                               <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                   <img src={item.image} alt="bike" />
                                 </div>
                               </div>
                             
                             </div>
                           </td>
                           <td>
                              {item.name}
                           </td>
                           <td>
                              $ {item.price}
                           </td>
                           <th>
                             <button 
                             onClick={()=>handleDelete(item._id)}
                             className=" hover:text-red-600 text-4xl "> <AiFillDelete></AiFillDelete> </button>
                           </th>
                         </tr> )
                     }
                    
                    
                   </tbody>
                   
                 
                   
                 </table>
               </div>
          }
        </div>


            
        </div>
    );
};

export default AllBike;