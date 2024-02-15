import React, { useEffect, useState } from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import Landing from '../components/Landing'
import Footer from '../components/Footer'


import Preloader from '../components/Preloader';

const Root = () => {

  return (

    <div> <>
      <NavbarComponent />
      <Landing />

      <Footer />
    </>
    </div>

  )
}

export default Root