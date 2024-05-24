import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


 const AxiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    // request interceptors to add authorization header for every    secure call to the api

    AxiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function(error){
        return Promise.reject(error);
    })

    // intercept 401 and 403 status
    AxiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status
        console.log(status)
        if(status === 401 || status ===403){
            navigate('/login')
           await logOut()
        }
        return Promise.reject(error);
      });




    return AxiosSecure
};

export default useAxiosSecure;