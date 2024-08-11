import { useState } from "react";
import toast from "react-hot-toast";
import { addProduct, imageUpload } from "../../../api/utils";

const AddProduct = () => {

    const [uploadButtonText, setUploadButtonText]= useState('Update Photo')
    

    const handleSubmit = async e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const delPrice = form.delPrice.value
        const details = form.details.value
        const image = form.image.files[0]
    
    
        const image_url =  await imageUpload(image)
    
        const productData = {
          name,
          brand,
          price,
          delPrice,
          details,
          image: image_url?.data?.display_url
      }
    
      try{
               
        const data = await addProduct(productData)
        console.log(data);
        setUploadButtonText('Uploaded!!')
        toast.success('Add Bike Admin🤞❤')
    
        
      } catch (err){
        toast.error(err.message)
      } 
    
     console.table(productData)
    }


       // handle Image btn text
       const handleImageChange = image =>{
        setUploadButtonText(image.name)
   }

    return (
        <div>
                       <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 '>
      <form onSubmit={handleSubmit}  >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-48'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-lime-800 text-lg'>
              Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='Name'
                required
              />
            </div>

             <div>
             <div className='space-y-1 text-sm'>
              <label htmlFor='brand' className='block text-lime-800 text-lg'>
              Brand
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='brand'
                id='brand'
                type='text'
                placeholder='brand'
                required
              />
            </div>
             </div>


            </div>
          <div className='space-y-6'>
           

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                                 <label>
                   
                    <input
                     onChange={e => handleImageChange(e.target.files[0])}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-lime-800 text-lg'>
                Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>


              <div className='space-y-1 text-sm'>
                <label htmlFor='delPrice' className='block text-lime-800 text-lg'>
                Delete Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='delPrice'
                  id='delPrice'
                  type='number'
                  placeholder='Delete Price'
                  required
                />
              </div>


            
            </div>

         

            <div className='space-y-1 text-sm'>
              <label htmlFor='details' className='block text-lime-800 text-lg'>
              Description
              </label>

              <textarea
                id='details'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='details'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-lg text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
           Add Admin Bike 
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddProduct;