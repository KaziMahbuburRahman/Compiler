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

import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import ProtectedPage from './components/ProtectedPage.jsx';

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
    path: "/sign-in",
    element: <SignIn redirectUrl={'/protected'} />
  },
  {
    path: "/sign-up",
    element: <SignUp redirectUrl={'/protected'} />
  },
  {
    path: "/protected",
    element: <>
    <SignedIn>
      <ProtectedPage/>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn/>
    </SignedOut>
    </>
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
    path: "/contact",
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <RouterProvider router={router} />
  </ClerkProvider>
);