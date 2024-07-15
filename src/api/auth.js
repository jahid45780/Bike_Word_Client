import UseAxiosSecure from "../Hooks/UseAxiosSecure"

// user save from database
export const saveUser = async user =>{
    const axiosSecure = UseAxiosSecure()
    const currentUser = {
        email: user.email,
        photo: user.photoURL,
        role:'guest',
        status:'Verified'
    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}
