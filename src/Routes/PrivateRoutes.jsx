import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{form:location.pathname}} replace></Navigate>
};

export default PrivateRoutes;