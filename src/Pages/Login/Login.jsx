import { useContext, useEffect  } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form || '/'
    
    

    const handleSubmit =(e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value ;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(Result=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully login",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from)
            console.log(Result.user)})
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleCaptcha = (e) => {
        const captcha_value = e.target.value;
        if (validateCaptcha(captcha_value)) {
            // setDisable(false)
        }
        else {
            // setDisable(true)
        }
    }

    return (
        <>
        <Helmet>
            <title>Cafe Rain || Sign in</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptcha} type="text"  name='captcha'  placeholder="type captcha" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                        <p>you have no account <Link to={'/register'}>Sign up </Link></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;