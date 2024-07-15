import { AiFillDelete } from "react-icons/ai";
import { LampDemo } from "../../../components/lamp/lamp";
import Usecard from "../../BikeCard/Usecard";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";


const Cart = () => {

    const [cart, refetch] = Usecard()

    const totalPrice = cart.reduce((total, item)=> total +item.price,0)
    const axiosSecure = UseAxiosSecure()

    const handleDelete = id =>{
          axiosSecure.delete(`/carts/${id}`)
          .then(res=>{
             if(res.data.deletedCount> 0){
                toast((t) => (
                    <span className=" text-2xl text-orange-500 shadow-2xl shadow-red-500" >
                       Successfully Deleted Your Booking Bike <br />
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
        <div>
            <LampDemo/>
            <div className=" grid lg:grid-cols-3 grid-cols-2 mt-3 items-center justify-around " >
            <h1 className=" text-2xl font-bold text-black" >  My Booking bike {cart.length} </h1>
            <p className="text-2xl font-bold text-black" > Total {totalPrice} $ </p>
            <button className=" btn text-2xl font-bold text-black" > Pay Bil </button>
            </div>

            <div className="overflow-x-auto  ">
  <table className="table w-full ">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
         Number
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
        cart.map((item, index)=>  <tr key={item._id} >
            <th>
               {index + 1 }
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



        </div>
    );
};

export default Cart;