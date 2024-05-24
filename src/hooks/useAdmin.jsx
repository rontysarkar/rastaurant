import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth()
    const AxiosSecure = useAxiosSecure()
    
    const {data :isAdmin,isPending:isAdminLoading} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async() =>{
            const {data} = await AxiosSecure.get(`/users/admin/${user?.email}`)
            return data?.isAdmin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;