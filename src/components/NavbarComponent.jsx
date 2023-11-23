
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Logo from '../../assets/logo.png'
// import { RiMenu4Fill } from 'react-icons/ri'

export const NavbarComponent = () => {
  const NavMenus = (
    <>
      <li className='border-none lg:mr-6 py-2 lg:py-0 lg:hidden'>
        <NavLink to="/bteb" className={({ isActive }) =>
          isActive ? "text-white btn btn-primary" : "btn glass text-black"
        }>Home</NavLink>
      </li>
      <li className='lg:mr-6 py-2 lg:py-0'>
        <NavLink to="/bteb/result" className={({ isActive }) =>
          isActive ? " text-white btn btn-primary" : "btn glass text-black"
        }>Individual Result</NavLink>
      </li>
      <li className='lg:mr-6 py-2 lg:py-0'>
        <NavLink to="/bteb/group-result" className={({ isActive }) =>
          isActive ? "text-white btn btn-primary" : "btn glass text-black"
        }>Group Result</NavLink>
      </li>
      <li className='py-2 lg:py-0'>
        <NavLink to="/bteb/cgpa-calculator" className={({ isActive }) =>
          isActive ? "text-white btn btn-primary" : "btn glass text-black"
        }>CGPA Calculator</NavLink>
      </li>
      <li className='lg:hidden py-2 lg:py-0'>
        <NavLink to="/bteb/developers" className={({ isActive }) =>
          isActive ? "text-white btn btn-primary" : "btn glass text-black"
        }>Developers</NavLink>
      </li>
    </>
  )

  return (
    <div className="navbar glass sticky top-0 z-50 md:px-16 lg:px-32">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-60">
            {NavMenus}
          </ul>
        </div>
        <Link to="/bteb" className="btn btn-ghost normal-case text-xl flex justify-center items-center gap-2"> <img alt="" className='w-8 md:w-10' /> TechHelpBD <strong className="text-primary">|</strong> BTEB</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavMenus}
        </ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <Link to="/bteb/developers" className="btn glass text-black">Developers</Link>
      </div>
    </div>
  )
}

