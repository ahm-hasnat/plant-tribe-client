import React from 'react';
import { Link } from 'react-router';
import Toggle from '../ToggleTheme/Toggle';

const Navbar = () => {
    return (
        <div>
        <div className="navbar bg-white shadow-sm px-16 fixed z-50 top-0 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link>Home</Link></li>
      <li>
        <Link>About</Link>
      </li>
      <li><Link>Contact</Link></li>
      </ul>
    </div>
    <img className='w-12' src="https://i.ibb.co.com/TZhVXN2/plant.png" alt="" />
    <a className="btn btn-ghost text-xl text-[#323b40]">Plant Tribe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link className='text-secondary'>Home</Link></li>
      <li>
        <Link className='text-secondary'>Browse Tips</Link>
      </li>
      <li><Link className='text-secondary'>Share a garden Tips</Link></li>
      <li><Link className='text-secondary'>My Tips</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://randomuser.me/api/portraits/men/1.jpg" />
        </div>
      </div>
    <a className="btn bg-[#204e51] hover:bg-[#f26b5e] text-white rounded ml-5 mr-5">Sign In</a>
   <Toggle></Toggle>

  </div>
  
</div>

</div>
    );
};

export default Navbar;