import { BiMenu } from "react-icons/bi";
import { FaBook, FaCalendar, FaCartArrowDown, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [carts] = useCarts()
    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu space-y-4 mt-10 font-bold uppercase">
                   {
                    isAdmin ? <>
                     <li >
                        <NavLink to={"dashboard/adminHome"}>
                            <FaHome />Admin Home
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"dashboard/addItems"}>
                            <FaUtensils /> Add Items
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"dashboard/manageItems"}>
                            <FaList />Manage Items 
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"dashboard/manageBooking"}>
                            <FaBook />Manage Booking
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to={"/dashboard/allUsers"}>
                            <FaUsers />All Users
                        </NavLink>
                    </li>
                    </> :<>
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
                    </>
                   }


                    {/* common navLink */}
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
