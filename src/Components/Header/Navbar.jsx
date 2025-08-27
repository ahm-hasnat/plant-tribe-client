import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Toggle from "../ToggleTheme/Toggle";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
const {user,signout} = use(AuthContext);
 const handleSignOut = () =>{
   
  signout()
  .then(()=>{
              Swal.fire({
                 title: "Logged Out!",
                 text: "User Logged Out.Stay connected!.",
                 icon: "info",
                  
               });
        navigate('/auth/login')
        })



      }

    const activeLink = ({ isActive }) =>
  isActive ? "underline small" : "small";

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-16 fixed z-50 top-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
         rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <NavLink to="/" className={activeLink}>Home</NavLink>
              </li>
              <li>
              <NavLink to="/explore" className={activeLink}>Explore Gardeners</NavLink>
              </li>
              <li>
             <NavLink to="/tips" className={activeLink}>Browse Tips</NavLink>
              </li>
              <li>
              <NavLink to="/share" className={activeLink}>Share a garden Tips</NavLink>
            </li>
              <li>
             <NavLink to="/mytips" className={activeLink}>My Tips</NavLink>
            </li>
            </ul>
          </div>
          <img
            className="w-12"
            src="https://i.ibb.co.com/TZhVXN2/plant.png"
            alt=""
          />
          <a className="btn btn-ghost text-xl big">Plant Tribe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             <li>
              <NavLink to="/" className={activeLink}>Home</NavLink>
              </li>
              <li>
              <NavLink to="/explore" className={activeLink}>Explore Gardeners</NavLink>
              </li>
              <li>
             <NavLink to="/tips" className={activeLink}>Browse Tips</NavLink>
              </li>
              <li>
              <NavLink to="/share" className={activeLink}>Share a garden Tips</NavLink>
            </li>
              <li>
             <NavLink to="/mytips" className={activeLink}>My Tips</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
         

         {user ? <button onClick={handleSignOut}  className="btn bg-[#204e51] hover:bg-[#f26b5e]
           text-white rounded ml-5 mr-5"> Sign Out</button>
          :
          <Link to='/signin'
            className="btn bg-[#204e51] hover:bg-[#f26b5e]
           text-white rounded ml-5 mr-5"
          >
            Sign In
          </Link>
}
          <Toggle></Toggle>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
