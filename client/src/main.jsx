import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";

import { Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx';
import OrganisationListing from './components/OrganisationListing.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/organisation-listing" element={<OrganisationListing />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navbar/>
  <RouterProvider router={router} />
  </StrictMode>,
)
