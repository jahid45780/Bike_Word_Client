import axios from "axios";

const axiosSecure = axios.create({
     baseURL: 'http://localhost:5000'

})

const UseAxiosSecure = () => {
   axiosSecure.interceptors.request.use(function(config){
     
     const  token = localStorage.getItem('assess-token')
    //  console.log(token);
     config.headers.authorization = `Bearer ${token}`
       return config
   },function(err){
      return Promise.reject(err)
   })
     return axiosSecure
};

export default UseAxiosSecure;