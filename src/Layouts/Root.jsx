import React, { useState } from 'react'
import { NavbarComponent } from '../components/NavbarComponent'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import BackToUp from '@uiw/react-back-to-top';
import ThemeChanger from '../shared/ThemeChanger/ThemeChanger';


const Root = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const [dtheme, setdTheme] = useState('');
  return (
    <div> <>
      <NavbarComponent openModal={openModal} />
      <ThemeChanger isModalOpen={isModalOpen} closeModal={closeModal} dtheme={dtheme} setdTheme={setdTheme} />
      <Landing />
      <BackToUp>Top</BackToUp>
      <Footer />
    </>
    </div>

  )
}

export default Root