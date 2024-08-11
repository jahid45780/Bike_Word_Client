import { useQuery } from "@tanstack/react-query";
import useAuth from "../api/useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = UseAxiosSecure()
    const {data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async ()=>{
             const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            //   console.log(res.data);
             return res.data?.admin
        }
    })
    return [isAdmin]
};

export default UseAdmin;