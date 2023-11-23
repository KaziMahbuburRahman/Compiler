import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import BackToUp from '@uiw/react-back-to-top';

const Root = () => {
  return (
    <div> <>
    <NavbarComponent />
    <Landing />
    <BackToUp />
    <Footer />
</>
    </div>
    
  )
}

export default Root