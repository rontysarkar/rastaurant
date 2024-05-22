import { BiMenu } from "react-icons/bi";
import { FaCalendar, FaCartArrowDown, FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";

const Dashboard = () => {
    const [carts] = useCarts()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-4">
                    <li >
                        <NavLink to={"userHome"}>
                            <FaHome />User Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"reservation"}>
                            <FaCalendar /> Reservation
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"carts"}>
                            <FaCartArrowDown /> My Cart ({carts.length})
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"booking"}>
                            <MdReviews />Add Review
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"booking"}>
                            <TbBrandBooking />My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li >
                        <NavLink to={"/"}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"/menu"}>
                            <BiMenu /> Menu
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
