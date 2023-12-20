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

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />

);