import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

    const { login, google} = useContext(AuthContext)
    

    const handelLogin = (e) =>{
        e.preventDefault()
        const form = e.target
        
        const email = form.email.value;
        const password = form.password.value;
        
       
        console.log({email,password});
        console.log('clicked');

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
          })
          .catch((error) => {
            const err = error.message;
            console.log(err);
          });
    }

    const handelGoogle = () =>{
        google()
        .then((result) => {
            const user = result.user;
            console.log(user);
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


                        <div className="card-body bg-[#9BA4B5] rounded">
                            <h3 className="text-4xl font-bold"> Please Log-In</h3>
                            <form onSubmit={handelLogin}>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" required name='email' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" required name='password' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn " />
                                </div>
                                <div className="form-control mt-6" onClick={handelGoogle}>
                                    <input type="submit" value="Google" className="btn  text-white" />
                                </div>
                            </form>
                            <div className="form-control mt-6">
                                <Link to='/register'><p className='text-white'>Dont Have An account? <span className="link link-hover text-[#394867]">Register</span> </p></Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;