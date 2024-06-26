const BikeNews = () => {
    return (

        <section>

          

<section className="px-5 py-10  bg-gray-50 dark:text-gray-800">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
            <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                <div className="flex flex-col space-y-8 md:space-y-12">
                    <div className="flex flex-col space-y-2">
                        <h3 className="flex items-center space-x-2 dark:text-gray-600">
                            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                            <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                        </h3>
                        Honda bikes price in India starts at Rs 64,900 for Honda Shine 100
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="flex items-center space-x-2 dark:text-gray-600">
                            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                            <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                        </h3>
                        The most expensive Honda two wheeler is Honda Gold Wing priced at Rs 39.16 Lakh.
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h3 className="flex items-center space-x-2 dark:text-gray-600">
                            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                            <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                        </h3>
                        The most popular models for Honda includes 4 Scooters, 6 Commuter, 4 Sports, 3 
                    </div>
                </div>
              
            </div>

               {/* i video */}
            <div className=" bg-center bg-no-repeat bg-cover xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" >
           
           <h1 className="pb-5 uppercase border-b-2 dark:border- dark:text-gray-600 font-extrabold " > Popular Services </h1>


            <p>
            <iframe className=" lg:w-96 h-60 border-2 border-fuchsia-400 shadow-lg shadow-fuchsia-500 rounded-r-[30px]" src="https://www.youtube.com/embed/T-0njs7eLy0?si=bYbWjrHtl5X4w9nj" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <iframe className=" lg:w-96 h-60 mt-2 border-fuchsia-400 shadow-lg shadow-fuchsia-500 rounded-s-[30px]"  src="https://www.youtube.com/embed/dOW4sNaoXsc?si=lzIzLp8Agrvo0EWU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </p>
             
            </div>





            <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-600 text-center">
                    
                    <button type="button" className="pb-5 uppercase border-b-2 dark:border- dark:text-gray-600 font-extrabold ">Popular</button>
                </div>
                <div className="flex flex-col divide-y dark:divide-gray-300">
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-md mr-4 dark:bg-gray-500" src="https://i.ibb.co/qdjcgP0/view-cool-powerful-motorcycle.jpg" />
                        <div className="flex flex-col flex-grow">
                            <p  className="font-serif hover:underline text-sm">The most popular bikes in India are MT 15 V2 (1.68 lakh), Splendor Plus (75,441), Classic 350 (1.93 lakh) and R15 V4 (1.82 lakh)</p>
     
                         
                        </div>
                    </div>
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-md mr-4 dark:bg-gray-500" src="https://i.ibb.co/QCYzZKf/motorcycle-with-helmet.jpg" />
                        <div className="flex flex-col flex-grow">
                            <a  className="font-serif hover:underline text-sm">Honda CLIQ Bike Price in BD 2024. Which Engine Type is Fan Cooled, 4 Stroke, SI Engine</a>
                            
                        </div>
                    </div>
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-md mr-4 dark:bg-gray-500" src="https://i.ibb.co/jzLD0Dv/amazing-brand-new-motorbike-is-standing-dark-underground-parking.jpg" />
                        <div className="flex flex-col flex-grow">
                            <a  className="font-serif hover:underline text-sm">This bike is powered by the 109.19 cc Engine. Honda CLIQ Generates Maximum Power 8 HP</a>
                        
                        </div>
                    </div>
                    <div className="flex px-1 py-4">
                        <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-md mr-4 dark:bg-gray-500" src="https://i.ibb.co/bWQ1B2w/brand-new-shiny-black-retro-chopper-is-parked-brick-building.jpg" />
                        <div className="flex flex-col flex-grow">
                            <a  className="font-serif hover:underline text-sm ">As the leading motorcycle manufacturer, Honda envisions a future where people can enjoy mobility freedom</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



        </section>
      
    );
};

export default BikeNews;