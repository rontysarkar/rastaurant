// import { useQuery } from "@tanstack/react-query";
// import useAxiosCommon from "./useAxiosCommon";

import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import useAuth from "./useAuth";

// const useCarts = () => {
//     const AxiosCommon = useAxiosCommon()
//     const {data: carts=[]} = useQuery({
//         queryKey:['carts'],
//         queryFn: async () =>{
//            const {data} = await AxiosCommon.get('/carts')
//            return data
            
//         }
//     })
//     return [carts]
// };

// export default useCarts;


const useCarts = () => {
    const AxiosCommon = useAxiosCommon()
    const {user} = useAuth()

    const {refetch,data : carts = []} = useQuery({
        queryKey:['cart',user?.email],
        queryFn:async() =>{
            const {data} = await AxiosCommon.get(`/carts?email=${user?.email}`)
            return data
        }
        
    })

    return [carts,refetch]
};

export default useCarts;