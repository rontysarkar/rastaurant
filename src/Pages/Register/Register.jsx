import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import SocialLogin from "../Sherd/SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const AxiosCommon = useAxiosCommon()

    const onSubmit = (data) => {
        createUser(data.email,data.password)
        .then(res=>{
            updateUserProfile(data.name,data.photoUrl)
            .then(result=>{
                console.log(result)
                const userInfo = {
                    name:data.name,
                    email:data.email
                }
                AxiosCommon.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log('user is add in database')
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "create account successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    }
                })

                
            })
            .catch(err=>console.log(err))
            console.log(res.user)
        })
        .catch(err=>console.log(err))
        console.log(data)}
    return (
        <>
        <Helmet>
            <title>Cafe Rain || Sign up</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" placeholder="Photo" {...register("photoUrl")} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500 mt-2">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
                            })} placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === "minLength" && (<p role="alert">password must be 6 character</p>)}
                            {errors.password?.type === "pattern" && (<p role="alert">You have must at least one upper case and one lower case and spacial character</p>)}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                            
                            
                        </div>
                    </form>
                    <p className="px-6 py-2"><Link  to={'/login'}>have to account sign in</Link></p>
                    <SocialLogin/>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;