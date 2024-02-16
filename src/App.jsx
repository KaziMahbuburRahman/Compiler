import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound.jsx';
import SavedCodes from './components/SavedCodes.jsx';
import Contact from './components/Contact/Contact.jsx';
import SavedCodeEditor from './components/SavedCodeEditor.jsx';
import { useEffect, useState } from 'react';
import "./App.css";
import Landing from "./components/Landing";
import Preloader from './components/Preloader.jsx';
import { NavbarComponent } from './components/NavbarComponent.jsx';
import Footer from './components/Footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <NavbarComponent />
    <Landing />
    <Footer />
    </>,
  },

  {
    path: "*",
    element: <>
    <NavbarComponent />
    <NotFound />
    <Footer />
    </>
  },
  {
    path: "/saved-codes",
    element: <>
    <NavbarComponent />
    <SavedCodes />  
    <Footer />
    </>
  },
  {
    path: "/saved-codes/:index",
    element: <>
    <NavbarComponent />
    <SavedCodeEditor />
    <Footer />
    </>
  },
  {
    path: "/contact",
    element: <>
            <NavbarComponent />
            <Contact />
            <Footer />
            </>
  }
]);



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log('rendering');
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <>
      {
        loading ? (
          <Preloader />
        ) :
          (
            <>
              <RouterProvider router={router} />

            </>
          )
      }
    </>
  );
}


export default App;
