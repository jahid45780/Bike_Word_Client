
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const AllBikeCard = ({allBikeCart}) => {

    const {brand,image, name} = allBikeCart

    const axiosSecure = UseAxiosSecure()

    const handleDeleteProduct = product=> {
         axiosSecure.delete(`/product/${product._id}`)
         .then(res=>{
            console.log(res);
         })
    }

    


    return (
        <div>
       
          <div className="card bg-base-100 image-full h-72  shadow-xl">
  <figure>
    <img
      className="w-full"
      src={image}
      alt="Bike" />
  </figure>
  <div className="card-body">
<h2 className="card-title"> {name} <br /> {brand} </h2>
   
    <div className="card-actions justify-end">
      <button 
       onClick={  handleDeleteProduct()}
      className="btn btn-primary"> Delate Product </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBikeCard;