import { FaSackDollar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";



const ProductDetail = () => {

    const singleInfo = useLoaderData()

    const {name, image, details, price, delPrice} = singleInfo;

    return (
        <div>

   <img className=" h-96 w-full" src="https://i.ibb.co/bWQ1B2w/brand-new-shiny-black-retro-chopper-is-parked-brick-building.jpg" alt="" />

          <div className=" grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-2 bg-base-100 shadow-xl">
  <figure>
    <img
      className=" w-[650px] h-[430px]"
      src={image}
      alt="bike" />
  </figure>
  <div className=" m-1" >
    <h2 className="card-title mt-3 text-center text-2xl"> {name} </h2>
      <p className=" text-lg mt-3" > {details} </p>
    <div className="card-actions m-2 justify-end">
    <div className="badge badge-outline flex gap-2 btn btn-outline btn-success text-xl"> <FaSackDollar/> {price} </div>
    <div className="badge badge-outline flex gap-2 btn btn-outline btn-error text-xl"> <FaSackDollar/>  <del>  {delPrice}  </del> </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetail;