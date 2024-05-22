import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useCarts from "../../hooks/useCarts";

const FoodCard = ({items}) => {
    const {image,recipe,name,price,_id} = items
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const AxiosCommon = useAxiosCommon()
    const [,refetch] = useCarts()
    const handleAddCart = items =>{
        
        if(user && user.email){
            console.log(items)
            const cartItem = {
                itemId :_id,
                email:user.email,
                name,
                image,
                price
            }
            AxiosCommon.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} is add `,
                        showConfirmButton: false,
                        timer: 1000
                      });
                }
            })
            

        }
        else{
            Swal.fire({
                title: "Your are not login ",
                text: "Please fast login and then add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "login now"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{ state:{form:location.pathname} })
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white ">{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={()=>handleAddCart(items)} className="btn btn-outline  border-0 border-b-4 bg-slate-100 border-orange-400 ">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;