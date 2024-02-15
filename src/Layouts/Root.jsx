import React, { useEffect, useState } from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import Landing from '../components/Landing'
import Footer from '../components/Footer'


import Preloader from '../components/Preloader';

const Root = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const [daisyTheme, setDaisyTheme] = useState('');



  return (

            <div> <>
              <NavbarComponent openModal={openModal} />
              <Landing />

              <Footer />
            </>
            </div>

  )
}

export default Root