import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import Toggle from "../ToggleTheme/Toggle";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signout } = use(AuthContext);
  const [showSignOutBtn, setShowSignOutBtn] = useState(false);
  // //.log(user);
  const handleSignOut = () => {
    setShowSignOutBtn(false);
    signout().then(() => {
      Swal.fire({
        title: "Logged Out!",
        text: "User Logged Out!.",
        icon: "info",
      });
      navigate("/auth/login");
    });
  };

  const activeLink = ({ isActive }) => (isActive ? "underline md:small" : "md:small");

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-6 fixed z-50 top-0 ">
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
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xs dropdown-content 
         rounded-box z-10 bg-base-100 mt-2 w-36 p-1 shadow "
            >
              <li>
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/explore" className={activeLink}>
                  Explore Gardeners
                </NavLink>
              </li>
              <li>
                <NavLink to="/browsetips" className={activeLink}>
                  Browse Tips
                </NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to="/sharetips" className={activeLink}>
                    Share a garden Tips
                  </NavLink>
                </li>
              )}
              {user && (
                <li>
                  <NavLink to="/mytips" className={activeLink}>
                    My Tips
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <img
            className="w-12 hidden lg:flex"
            src="https://i.ibb.co.com/TZhVXN2/plant.png"
            alt=""
          />
          <a className="btn btn-ghost px-0 md:px-4 text-xl big">Plant Tribe</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" className={activeLink}>
                Explore Gardeners
              </NavLink>
            </li>

            <li>
              <NavLink to="/browsetips" className={activeLink}>
                Browse Tips
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/sharetips" className={activeLink}>
                  Share a garden Tips
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/mytips" className={activeLink}>
                  My Tips
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="flex items-center">
            <div
              onClick={() => setShowSignOutBtn((show) => !show)}
              className="avatar 
          avatar-online mr-5"
            >
              <div className="md:w-11 w-9 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
              
            </div>
             <Toggle></Toggle>
             </div>
          )}
          {user && (
            <div
              className={`
      absolute right-16 top-full mt-2
      transition-all duration-500 ease-out
      transform
      ${
        showSignOutBtn
          ? "opacity-100 translate-y-0 delay-150"
          : "opacity-0 translate-y-5 pointer-events-none"
      }
    `}
            >
              <button
                onClick={handleSignOut}
                className="btn bg-[#204e51] hover:bg-[#f26b5e] text-white rounded"
              >
                Sign Out
              </button>
            </div>
          )}

          {!user && (
            <Link
              to="/auth/signin"
              className="btn bg-[#204e51] hover:bg-[#f26b5e]
           text-white rounded ml-5 mr-5"
            >
              Sign In
            </Link>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
