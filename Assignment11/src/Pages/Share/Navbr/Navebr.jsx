import { useContext, useState } from 'react';
import logo from '../../../assets/unicon.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaUser } from "react-icons/fa";
const Navebr = () => {
  const { user, logOut } = useContext(AuthContext)
  const [tool, setTool] = useState(false);
  // const [isTrue ,setTrue] = useState(false)
  console.log(user);
  const handelLogOut = () => {
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

  const toolOne = () => {
    setTool(true);
  };
  const toolTwo = () => {
    setTool(false);
  };
  

  return (
    <div className="bg-blue-500 relative">
      
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
                !user?.uid ? <> <NavLink to='/login'><li><span>LOG IN</span></li></NavLink>
                  <NavLink to='/register'><li><span>REGISTER</span></li></NavLink></> : <> <NavLink ><li onClick={handelLogOut}><span>Log out</span></li></NavLink></>
              }
              <li className='rounded-full '>{!user?.uid ? <FaUser /> : <>{user?.true ? <img src={user?.photoURL} alt="" /> : <FaUser />}</>} </li>

            </ul>
          </div>
          <a className=" md:text-2xl sm:text-sm ">
            <div className='flex gap-3 items-end justify-center w-full'>
              Toy-cars Hub <img src={logo} alt="" height='45' width='45' className='rounded-full ring-offset-2 ring-2 ' />
            </div>
          </a>
        </div>
        <div className="navbar-end hidden px-12 lg:flex">
          <ul className="menu-horizontal flex gap-3 items-center justify-center">
          <p className='absolute top-16 right-5 text-blue-700 border p-2'>{tool == true ? <span>{user?.displayName}</span> : ""}</p>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/alltoy'>All Toys</NavLink> </li>
            <li>{user && <NavLink to='/myToys'>My Toys</NavLink>} </li>
            <li>{user && <NavLink to='/addedToy'>Added Toys</NavLink>}</li>
            <li><a>Blogs</a></li>
            <li>
              {
                !user ? <> <NavLink to='/login'><span className='mr-3'>LOG IN</span></NavLink>
                  <NavLink to='/register'><span>REGISTER</span></NavLink></> : <> <NavLink ><span onClick={handelLogOut}>Log out</span></NavLink> </>
              }
            </li>

            {user ? <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                
              <img src={user?.photoURL} alt="" onMouseOver={toolOne} onMouseOut={toolTwo}/>
                
              </div>
            </div> : <FaUser />}

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navebr;