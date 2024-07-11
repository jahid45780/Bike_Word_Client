import { FaSackDollar } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../api/useAuth";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Usecard from "../BikeCard/Usecard";


const ProductCart = ({ProductCart}) => {
  const {image, _id, name, price, delPrice, } = ProductCart;

    

    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const [, refetch ] = Usecard()
    
    const handleAddToCart = () =>{
      
      if(user && user.email){
          //  sent to the database

          const cartItem = {
             bikeId : _id,
             email: user.email,
             name,
             image, 
             price
          }

          axiosSecure.post('/carts', cartItem)
          .then(res=> {
             if(res.data.insertedId){
                 toast.success("Success The Add Bike Cart")
                   refetch()
             }
            
          })

      }else{
        toast.error("Your Not Login")
        navigate('/login', {state:{from: location}})
      }

    }


      return (
        <div>

<div className="card  mt-2  shadow-xl hover:shadow-2xl shadow-orange-400">
  <figure>
    <img
    className="w-full  h-60  "
      src={image}
      alt="product" />
  </figure>
  <div className="card-body">
    
    <Link to={`/detail/${_id}`} >
    <h2 className="card-title text-2xl">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    </Link>

    
  
    <div className="card-actions mt-28 justify-end">
      <div className="badge badge-outline flex gap-2 btn btn-outline btn-success text-xl"> <FaSackDollar/> {price} </div>
      <div className="badge badge-outline flex gap-2 btn btn-outline btn-error text-xl"> <FaSackDollar/>  <del>  {delPrice}  </del> </div>

      <button
       onClick={handleAddToCart}
      className=" btn"  > Booking </button>

    </div>
  </div>
</div>

            


        </div>
    );
};

export default ProductCart;