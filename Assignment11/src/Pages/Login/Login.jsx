import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    // const { login } = useContext(AuthContext)
    

    // const handelLogin = (e) =>{
    //     e.preventDefault()
    //     const form = e.target
        
    //     const email = form.email.value;
    //     const password = form.password.value;
        
       
    //     console.log({email,password});
    //     console.log('clicked');

    //     login(email,password)
    //     .then((person) => {
    //         // Signed in 
    //         const user = person.user;
    //         console.log(user);
    //       })
    //       .catch((error) => {
    //         const err = error.message;
    //         console.log(err);
    //       });
    // }
    // return (
    //     <div>

    //         <div className="hero min-h-screen bg-[#F1F6F9]">

    //             <div className="hero-content ">

    //                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


    //                     <div className="card-body bg-[#9BA4B5] rounded">
    //                         <h3 className="text-4xl font-bold"> Please Log-In</h3>
    //                         <form onSubmit={handelLogin}>


    //                             <div className="form-control">
    //                                 <label className="label">
    //                                     <span className="label-text text-white">Email</span>
    //                                 </label>
    //                                 <input type="text" placeholder="email" required name='email' className="input input-bordered" />
    //                             </div>

    //                             <div className="form-control">
    //                                 <label className="label">
    //                                     <span className="label-text text-white">Password</span>
    //                                 </label>
    //                                 <input type="text" placeholder="password" required name='password' className="input input-bordered" />
    //                             </div>
    //                             <div className="form-control mt-6">
    //                                 <input type="submit" className="btn " />
    //                             </div>
    //                         </form>
                        
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Login;