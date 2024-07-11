
import { useParams } from "react-router-dom";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";

const Product = () => {

    let { id } = useParams();

  
const [product, setProduct] = useState([])
useEffect(()=> {

  fetch(`http://localhost:5000/products/brand/${id}`)
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
     setProduct(data);
  })

},[id])



  

    return (

        <div>
            <img className=" h-[550px] w-full" src="https://i.ibb.co/qdjcgP0/view-cool-powerful-motorcycle.jpg" alt="" />

  <div className=" grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 max-w-4xl mx-auto" >
  {product.map(product=> <ProductCart key={product} ProductCart={product} ></ProductCart> ) }
  </div>

        </div>
    );
};

export default Product;
