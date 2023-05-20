import { useContext } from 'react';
import logo from '../../../assets/unicon.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaUser } from "react-icons/fa";
const Navebr = () => {
  const {user,logOut} = useContext(AuthContext)
 
console.log(user);
  const handelLogOut = () =>{
    logOut()
    .then(() => {
      // Sign-out successful.
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Log out Succesful',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="bg-blue-500">
      <div className="navbar bg-[#394867] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-5 shadow bg-gray-700 rounded-box w-52">
            <div className='flex gap-3 items-end justify-center w-full'>
            Toy-cars Hub <img src={logo} alt="" height='30' width='30' className='rounded-full ring-offset-2 ring-2 ' />
            </div>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/alltoy'>All Toys</NavLink> </li>
            <li><NavLink to='/myToys'>My Toys</NavLink> </li>
            
            <li><NavLink to='/addedToy'>Added Toys</NavLink> </li>
            <li><a>Blogs</a></li>
           {
            !user?.uid  ? <> <NavLink to='/login'><li><span>LOG IN</span></li></NavLink>
            <NavLink to='/register'><li><span>REGISTER</span></li></NavLink></> :<> <NavLink ><li onClick={handelLogOut}><span>Log out</span></li></NavLink></>
           }
             <li className='rounded-full '>{!user?.uid ? <FaUser /> :<img src={user?.photoURL} alt="" className='w-[60px] h-[50px]'/>} </li>
              
            </ul>
          </div>
          <a className=" md:text-2xl sm:text-sm ">
            <div className='flex gap-3 items-end justify-center w-full'>
            Toy-cars Hub <img src={logo} alt="" height='45' width='45' className='rounded-full ring-offset-2 ring-2 ' />
            </div>
          </a>
        </div>
        <div className="navbar-end hidden px-12 lg:flex">
          <ul className="menu menu-horizontal ">
           
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/alltoy'>All Toys</NavLink> </li>
            <li><NavLink to='/myToys'>My Toys</NavLink> </li>
            
            <li><NavLink to='/addedToy'>Added Toys</NavLink> </li>
            <li><a>Blogs</a></li>
           {
            !user? <> <NavLink to='/login'><li><span>LOG IN</span></li></NavLink>
            <NavLink to='/register'><li><span>REGISTER</span></li></NavLink></> :<> <NavLink ><li onClick={handelLogOut}><span>Log out</span></li></NavLink></>
           }
             <li>
              {user? <img src={user?.photoURL} alt="" className='rounded-full w-[60px] h-[50px]'/>:<FaUser /> }
               </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navebr;