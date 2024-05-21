import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sherd/Footer/Footer";
import NavBar from "../Pages/Sherd/NavBar/NavBar";

const Main = () => {
    const location = useLocation()
    const headerFooterHidden = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
            {headerFooterHidden || <NavBar/>}
            <Outlet/>
            { headerFooterHidden ||<Footer/>}
        </div>
    );
};

export default Main;