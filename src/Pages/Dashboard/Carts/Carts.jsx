import { Link } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import Swal from "sweetalert2";

const Carts = () => {
    const AxiosCommon = useAxiosCommon()
    const [carts, refetch] = useCarts()
    const totalPrice = carts.reduce((accumulator, items) => accumulator + items.price, 0)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                AxiosCommon.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        })




    }
    return (
        <div>
            <div className="flex justify-evenly mb-4 my-20">
                <h1 className="text-4xl font-bold uppercase">Items :{carts.length}</h1>
                <h1 className="text-4xl font-bold uppercase">Total Price :{totalPrice}</h1>
                <Link className="btn">Pay</Link>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-400 ">
                                <th>
                                    #
                                </th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-2xl"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Carts;