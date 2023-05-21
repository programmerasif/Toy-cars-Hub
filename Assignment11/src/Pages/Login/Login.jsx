import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const { login, google} = useContext(AuthContext)
    const [err ,setErr] = useState(' ')
        const navigate = useNavigate()
        const from = useLocation()
        console.log(from.state?.from);
        console.log(from);
    const handelLogin = (e) =>{
        e.preventDefault()
        const form = e.target
        
        const email = form.email.value;
        const password = form.password.value;
        
       
       

        login(email,password)
        .then((person) => {
            // Signed in 
            
            const user = person.user;
            if (user) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully login',
                    showConfirmButton: false,
                    timer: 1500
                  })
                 
            }
            navigate('/')
          })
          .catch((error) => {
            const err = error.message;
            console.log(err);
            setErr('Email or Password worng')
          });
    }

    const handelGoogle = () =>{
        google()
        .then(() => {
            
            setErr(' ')
            navigate(from.state?.from || '/')
          }).catch((error) => {
            console.log(error);
            // ...
          });
    }
    return (
        <div>

            <div className="hero min-h-screen bg-[#F1F6F9]">

                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


                        <div className="card-body rounded px-10">
                            <h3 className="text-4xl font-bold"> Please Log-In</h3>
                            <form onSubmit={handelLogin}>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" required name='email' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" required name='password' className="input input-bordered" />
                                </div>
                                
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-[#394867]" />
                                </div>
                                
                                
                            </form>
                            <div className="form-control mt-2" onClick={handelGoogle}>
                                
                                    <button className="btn bg-[#394867] "><span className="mr-3">Google</span> <FaGoogle /> </button>
                                </div>
                                <p className="text-red-600">{err}</p>
                            <div className="form-control mt-6">
                                <Link to='/register'><p className=''>Dont Have An account? <span className="link link-hover text-[#0753eb]">Register</span> </p></Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;