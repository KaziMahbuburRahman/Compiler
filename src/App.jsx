import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import SavedCodes from './components/SavedCodes.jsx';
import Contact from './components/Contact/Contact.jsx';
import SavedCodeEditor from './components/SavedCodeEditor.jsx';
import { useEffect, useState } from 'react';
import "./App.css";
import Landing from "./components/Landing";
import Preloader from './components/Preloader.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/saved-codes",
    element: <SavedCodes />
  },
  {
    path: "/saved-codes/:index",
    element: <SavedCodeEditor />
  },
  {
    path: "/contact",
    element: <Contact />
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
