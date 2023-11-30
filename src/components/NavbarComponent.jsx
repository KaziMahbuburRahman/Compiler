
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeChanger from '../shared/ThemeChanger/ThemeChanger';
import SettingsIcon from '../assets/svg/SettingsIcon'

// import Logo from '../../assets/logo.png'
// import { RiMenu4Fill } from 'react-icons/ri'

export const NavbarComponent = ({ openModal }) => {
  // Added state to track whether the menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const NavMenus = (
    <>
      <li className='border-none lg:mr-6 py-2 lg:py-0 lg:hidden'>
        <NavLink onClick={handleScrollToTop} to="/" className={({ isActive }) =>
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
        <NavLink to="/saved-codes" className={({ isActive }) =>
          isActive ? "text-white btn btn-primary" : "btn glass text-black"
        }>Saved Codes</NavLink>
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
            <label className={`swap swap-rotate `}>

              {/* <!-- this hidden checkbox controls the state --> */}
              <input type="checkbox" onClick={() => setMenuOpen(!menuOpen)} />

              {/* <!-- hamburger icon --> */}
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

              {/* <!-- close icon --> */}
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>

          </label>
          <ul tabIndex={0} className={`${menuOpen ? 'block' : 'hidden'} menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-60`}>
            {NavMenus}
          </ul>
        </div>
        {/* <img alt="" className='w-8 md:w-10' /> */}
        <Link to="/" onClick={handleScrollToTop} className="btn btn-ghost normal-case text-lg flex justify-center items-center gap-2"> TechHelpBD <strong className="text-primary">|</strong> Compiler</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavMenus}
        </ul>
      </div>
      <div className="navbar-end  md:flex">
        <label onClick={openModal}
          htmlFor="themeChanger"
          className="btn btn-sm btn-primary rounded-full h-8 w-8 right-1 top-1/3"
        >
          <span className={`animate-spin-slow text-lg text-white`}>
            <SettingsIcon />
          </span>

        </label>
      </div>
    </div>
  )
}

