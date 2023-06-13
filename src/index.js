import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from "./App/store"
import Home from './Home/Home';
import Pendaftaran from './Pendaftaran/Pendaftaran';
import Ulasan from './Ulasan/Ulasan';
import ProfileTutor from './ProfileTutor/ProfileTutor';
import ContactKami from './ContactKami/ContactKami';
import TentangKami from './TentangKami/TentangKami';
import CampEdu from './BimbinganBelajar/CampEdu/CampEdu';
import Cpns from './BimbinganBelajar/Cpns/Cpns';
import Bumn from './BimbinganBelajar/Bumn/Bumn';
import SmaUnggul from './BimbinganBelajar/SmaUnggul/SmaUnggul';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Home",
    element: <Home/>
  },
  {
    path: "Pendaftaran",
    element: <Pendaftaran/>
  },
  {
    path: "Ulasan",
    element: <Ulasan/>
  },
  {
    path: "ProfileTutor",
    element: <ProfileTutor/>
  },
  {
    path: "ContactKami",
    element: <ContactKami/>
  },
  {
    path: "TentangKami",
    element: <TentangKami/>
  },
  {
    path: "CampEdu",
    element: <CampEdu/>
  },
  {
    path: "Cpns",
    element: <Cpns/>
  },
  {
    path: "Bumn",
    element: <Bumn/>
  },
  {
    path: "SmaUnggul",
    element: <SmaUnggul/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
