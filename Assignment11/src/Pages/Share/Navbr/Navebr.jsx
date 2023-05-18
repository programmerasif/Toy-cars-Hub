import { useContext } from 'react';
import logo from '../../../assets/unicon.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { NavLink } from "react-router-dom";

const Navebr = () => {
  const {user,logOut} = useContext(AuthContext)
 

  const handelLogOut = () =>{
    logOut()
    .then(() => {
      // Sign-out successful.
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
              <NavLink><li><a>Home</a></li></NavLink>
              <NavLink><li><a>All Toys</a></li></NavLink>
              <NavLink><li><a>My Toys</a></li></NavLink>
              <NavLink><li><a>Add A Toy</a></li></NavLink>
              <NavLink><li><a>Blogs</a></li></NavLink>
              <NavLink to='/login'><li><a>LOG IN</a></li></NavLink>
              <NavLink to='/register'><li><a>REGISTER</a></li></NavLink>
              <li>
              
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl ">
            <div className='flex gap-3 items-end justify-center'>
            Toy-cars Hub <img src={logo} alt="" height='45' width='45' className='rounded-full ring-offset-2 ring-2' />
            </div>
          </a>
        </div>
        <div className="navbar-end hidden px-12 lg:flex">
          <ul className="menu menu-horizontal ">
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/alltoy'>All Toys</NavLink> </li>
            
            <li><a>My Toys</a></li>
            <li><a>Add A Toy</a></li>
            <li><a>Blogs</a></li>
           {
            user != true ? <> <NavLink to='/login'><li><span>LOG IN</span></li></NavLink>
            <NavLink to='/register'><li><span>REGISTER</span></li></NavLink></> :<> <NavLink ><li onClick={handelLogOut}><small>LOG OUT</small></li></NavLink></>
           }
            
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navebr;