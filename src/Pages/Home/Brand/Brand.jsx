import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import Loader from "../../../Componts/Loader/Loader";

const Brand = () => {
    const [brand, setBrand] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        fetch('http://localhost:5000/brand')
        .then( res => res.json())
        .then(data => {
            setBrand(data)
            setLoading(false)
        })
        
    },[])

    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 m-3  max-w-5xl mx-auto " >
            
       {brand.map( brandId => <BrandCard key={brandId._id} brandCard={brandId} ></BrandCard> )}

        </div>
    );
};

export default Brand;