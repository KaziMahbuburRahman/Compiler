
// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import ThemeChanger from '../shared/ThemeChanger/ThemeChanger';
// import SettingsIcon from '../assets/svg/SettingsIcon'
// import HomeIcon from '../assets/svg/HomeIcon';

// // import Logo from '../../assets/logo.png'
// // import { RiMenu4Fill } from 'react-icons/ri'

// export const NavbarComponent = ({ openModal }) => {
//   // Added state to track whether the menu is open or closed
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//   const NavMenus = (
//     <>
//       <li className='border-none lg:mr-6 py-2 lg:py-0'>
//         <NavLink onClick={handleScrollToTop} to="/" className={({ isActive }) =>
//           isActive ? "text-white btn btn-primary" : "btn glass text-black"
//         }> 
//         <span className='hidden lg:block'>
//           <HomeIcon/>
//         </span> 
//         <span className='lg:hidden block'>
//           Home
//         </span> 
//         </NavLink>
//       </li>

      
//       <li className='py-2 lg:py-0 lg:mr-6'>
//         <NavLink to="/saved-codes" className={({ isActive }) =>
//           isActive ? "text-white btn btn-primary" : "btn glass text-black"
//         }>Saved Codes</NavLink>
//       </li>

//       <li className='py-2 lg:py-0'>
//         <NavLink to="/contact" className={({ isActive }) =>
//           isActive ? "text-white btn btn-primary" : "btn glass text-black"
//         }>Feedback</NavLink>
//       </li>
//       {/* <li className='lg:hidden py-2 lg:py-0'>
//         <NavLink to="/bteb/developers" className={({ isActive }) =>
//           isActive ? "text-white btn btn-primary" : "btn glass text-black"
//         }>Developers</NavLink>
//       </li> */}
//     </>
//   )

//   return (
//     <div className="navbar glass sticky top-0 z-50 md:px-16 lg:px-32">
//       <div className="navbar-start">

//         <div className="dropdown">
//         <label tabIndex={0} className="flex lg:hidden">
//             {/* menu icon */}
//             <label className={`swap swap-rotate `}>

//               {/* <!-- this hidden checkbox controls the state --> */}
//               <input type="checkbox" onClick={() => setMenuOpen(!menuOpen)} />

//               {/* <!-- hamburger icon --> */}
//               <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

//               {/* <!-- close icon --> */}
//               <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

//             </label>

//           </label>
//           <ul tabIndex={0} className={`${menuOpen ? 'block' : 'hidden'} menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-60`}>
//             {NavMenus}
//           </ul>
//         </div>
//         {/* <img alt="" className='w-8 md:w-10' /> */}
//         <Link to="/" onClick={handleScrollToTop} className="btn btn-ghost normal-case text-lg flex justify-center items-center gap-2"> TechHelpBD <strong className="text-primary">|</strong> Compiler</Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {NavMenus}
//         </ul>
//       </div>
//       <div className="navbar-end  md:flex">
//         <label onClick={openModal}
//           htmlFor="themeChanger"
//           className="btn btn-sm btn-primary rounded-full h-8 w-8 right-1 top-1/3"
//         >
//           <span className={`animate-spin-slow text-lg text-white`}>
//             <SettingsIcon />
//           </span>

//         </label>
//       </div>
//     </div>
//   )
// }

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon';




export const NavbarComponent = () => {

  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPath = useLocation().pathname;

  useEffect(() => {
    setIsToggleOpen(false);
  }, [currentPath]);

  useEffect(() => {
    // Add or remove 'overflow-hidden' class based on the isToggleOpen state
    document.body.classList.toggle('overflow-hidden', isToggleOpen);
  }, [isToggleOpen]);



  return (
    <>
      <header className="mb-5 border-b-1 relative z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6">
          <nav
            aria-label="main navigation"
            className="flex lg:inline h-[3.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >


            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>


            <div className='mx-auto flex justify-between items-center max-w-[960px]'>

              {/*      <!-- Brand logo --> */}
              <div>
                <button>
                  <Link to="/gitdown/" onClick={handleScrollToTop} className={
                    currentPath === '/gitdown/' ? "btn btn-ghost normal-case text-lg flex justify-center items-center gap-2 outline-none bg-transparent border-none lg:hover:bg-gray-100/100 p-2 lg:rounded-md"
                      :
                      "btn btn-ghost normal-case text-lg flex justify-center items-center gap-2 outline-none bg-transparent border-none transition duration-300 active:scale-90 lg:hover:bg-gray-100/100 p-2 lg:rounded-md"}>TechHelpBD <strong className="text-blue-500">|</strong> GitDown</Link>
                </button>
              </div>
              {/*      <!-- Navigation links --> */}
              <div>
                <ul
                  role="menubar"
                  aria-label="Select page"
                  className={`absolute top-0 left-0 z-[-1]  w-full h-screen justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                    }`}
                >
                  <li role="none" className="flex items-stretch">
                    <Link onClick={handleScrollToTop} to="/gitdown/"
                      className={
                        currentPath === '/gitdown/' ? "text-sky-500 lg:text-white lg:bg-sky-500 flex items-center gap-2 py-4 lg:px-3 lg:py-1 transition-colors duration-300 focus:outline-none focus-visible:outline-none  lg:rounded-lg lg:mx-5 my-1"

                          :

                          "lg:shadow flex items-center gap-2 lg:px-3 lg:py-1 py-4 transition duration-300 active:scale-90 lg:rounded-md lg:mx-5 my-1"
                      }
                      role="menuitem"
                      aria-haspopup="false"
                    >
                      <span className='hidden lg:block'>
                        <HomeIcon />
                      </span>
                      <span className='lg:hidden block'>
                        Home
                      </span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <a
                      href="https://techhelpbd.com"
                      target='blank'
                      role="menuitem"
                      aria-current="page"
                      aria-haspopup="false"
                      className="lg:shadow flex items-center gap-2 lg:py-2 lg:px-4 transition duration-300 active:scale-90 lg:rounded-md lg:mx-5 my-1"

                    >
                      <span>Blog</span>
                    </a>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link to="/gitdown/contact"
                      role="menuitem"
                      aria-haspopup="false"
                      className={
                        currentPath === '/gitdown/contact' || currentPath === '/gitdown/contact/' ? "text-sky-500 lg:text-white lg:bg-sky-500 flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:py-2 lg:px-3   lg:rounded-md lg:mx-5 my-1"

                          :

                          "lg:shadow flex items-center py-4 lg:px-3 lg:py-2 transition duration-300 active:scale-90 lg:rounded-md lg:mx-5 my-1"
                      }

                    >
                      <span>Feedback</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}