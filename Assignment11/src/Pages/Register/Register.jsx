import  { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {

    const {creatUsers,google} = useContext(AuthContext);
    const handelRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
       
        console.log({name,email,password,photoUrl});
        console.log('clicked');

        creatUsers(email,password)
        .then((person) => {
            // Signed in 
            const user = person.user;
            console.log(user);
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
                   
                
                    <div className="card-body px-10 rounded"> 
                    <h3 className="text-4xl font-bold"> Please Register</h3>
                            
                           <form onSubmit={handelRegister}>

                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" required name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text" placeholder="email" required name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" required name='photoUrl' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Password</span>
                                </label>
                                <input type="text" placeholder="password" required name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn bg-[#394867]" value='Register'/>
                            </div>
                            <div className="form-control mt-6" onClick={handelGoogle}>
                                
                                    <button className="btn bg-[#394867] "><span className="mr-3">Google</span> <FaGoogle /> </button>
                                </div>
                           </form>
                            <div className="form-control mt-6">
                                <Link to='/login'><p className=''>Already Have An account? <span className='link link-hover text-[#0753eb]'>LOG IN</span> </p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;