import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const Brand = () => {
    const [brand, setBrand] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/brand')
        .then( res => res.json())
        .then(data => setBrand(data))
    },[])

    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 m-3  max-w-5xl mx-auto " >
            
       {brand.map( brandId => <BrandCard key={brandId._id} brandCard={brandId} ></BrandCard> )}

        </div>
    );
};

export default Brand;