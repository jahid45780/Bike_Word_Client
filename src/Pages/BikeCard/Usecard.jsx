
import {useQuery} from '@tanstack/react-query'
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import useAuth from '../../api/useAuth';

const Usecard = () => {
    const axiosSecure = UseAxiosSecure()
     const { user } = useAuth()
   const { refetch, data: cart = [] } = useQuery({
          queryKey:['carts', user?.email],
          queryFn: async ()=>{
              const res = await axiosSecure.get(`/carts?email=${user.email}`)
              return res.data
          }
   })
   return [cart, refetch]
};

export default Usecard;