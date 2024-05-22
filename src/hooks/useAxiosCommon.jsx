import axios from "axios";

 const AxiosCommon = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosCommon = () => {
    return AxiosCommon
};

export default useAxiosCommon;