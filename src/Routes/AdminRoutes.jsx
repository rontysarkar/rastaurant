import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-md"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={'/login'} state={{form:location.pathname}} replace></Navigate>
    
};

export default AdminRoutes;