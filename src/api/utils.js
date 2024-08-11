import axios from "axios"
import UseAxiosSecure from "../Hooks/UseAxiosSecure"



export const imageUpload = async image =>{
     


    const formData = new FormData()
    formData.append('image', image)

      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
     return data
   }
 
   const axiosSecure = UseAxiosSecure()

// save admin bike saver
export const addProduct = async (productData)=>{
  const {data} = await axiosSecure.post('/product', productData)
  return data
}

// save admin bike brand

 export const addBrand = async (brandData)=>{
    const {data} = await axiosSecure.post('/brand', brandData)
    return data
}