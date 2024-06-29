import { Link } from "react-router-dom";

const SingUp = () => {
    return (
        <div>
           
           <div className=" dark:bg-gray-900 " >
            
            <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8  dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Create is your account</h2>
                <p className="text-sm text-center dark:text-gray-400">your have  account?
                    <Link to='/login' > <p className=" hover:underline hover:text-red-600"> Login up here</p> </Link>
                </p>
                <div className="my-6 space-y-4">
                    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                 
                
                </div>
                <div className="flex items-center w-full my-4">
                
                    <p className="px-3 text-center mx-auto dark:text-gray-400">OR</p>
            
                </div>
                <form action="" className="space-y-8">
                    <div className="space-y-4">

                    <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm"> Full Name </label>
                            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="bike@word.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>

                         
                        <div className="space-y-2">
                            <label htmlFor="number" className="block text-sm"> Your Number </label>
                            <input type="number" name="number" id="number" placeholder="Your Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                        
                            </div>
                            <input type="password" name="password" id="password" placeholder="Enter Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>


                            {/* part 2 */}
                         <div>
                                
                         <div className=" border-2 dark:border-gray-700 dark:bg-gray-900 p-2 rounded-lg" >
          <label htmlFor='image' className='block mb-2 text-lg '>
          Select The Image
          </label>
          <input
            required
            type='file'
            id='image'
            name='image'
            accept='image/*'
          />
        </div>

                         </div>

                    </div>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign in</button>
                </form>
            </div>
            
             
                        
                    </div>


        </div>
    );
};

export default SingUp;