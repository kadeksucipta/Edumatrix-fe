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
import Ppds from './BimbinganBelajar/Ppds/Ppds';
import HomeSchool from './BimbinganBelajar/HomeSchool/HomeSchool';
import Igcse from './BimbinganBelajar/Igcse/Igcse';
import Iht from './BimbinganBelajar/Iht/Iht';
import OnlineOffline from './Privat/OnlineOffline/OnlineOffline';
import BimbelPendidikan from './Privat/BimbelPendidikan/BimbelPendidikan';
import PrivatMahasiswa from './Privat/PrivatMahasiswa/PrivatMahasiswa';
import PrivatIslam from './Privat/PrivatIslam/PrivatIslam';
import PrivatIT from './Privat/PrivatIT/PrivatIT';
import PrivatMusik from './Privat/PrivatMusik/PrivatMusik';
import PrivatUtbk from './Privat/PrivatUtbk/PrivatUtbk';
import PrivatBipa from './Privat/PrivatBipa/PrivatBipa';
import Kedokteran from './Ptn/Kedokteran/Kedokteran';
import Snbt from './Ptn/Snbt/Snbt';
import Gapyear from './Ptn/Gapyear/Gapyear';
import Umptn from './Ptn/Umptn/Umptn';
import Umptnkin from './Ptn/Umptnkin/Umptnkin';
import Akmil from './TarunaEdu/Akmil/Akmil';

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
  {
    path: "Ppds",
    element: <Ppds/>
  },
  {
    path: "HomeSchool",
    element: <HomeSchool/>
  },
  {
    path: "Igcse",
    element: <Igcse/>
  },
  {
    path: "Iht",
    element: <Iht/>
  },
  {
    path: "OnlineOffline",
    element: <OnlineOffline/>
  },
  {
    path: "BimbelPendidikan",
    element: <BimbelPendidikan/>
  },
  {
    path: "PrivatMahasiswa",
    element: <PrivatMahasiswa/>
  },
  {
    path: "PrivatIslam",
    element: <PrivatIslam/>
  },
  {
    path: "PrivatIT",
    element: <PrivatIT/>
  },
  {
    path: "PrivatMusik",
    element: <PrivatMusik/>
  },
  {
    path: "PrivatUtbk",
    element: <PrivatUtbk/>
  },
  {
    path: "PrivatBipa",
    element: <PrivatBipa/>
  },
  {
    path: "Kedokteran",
    element: <Kedokteran/>
  },
  {
    path: "Snbt",
    element: <Snbt/>
  },
  {
    path: "Gapyear",
    element: <Gapyear/>
  },
  {
    path: "Umptn",
    element: <Umptn/>
  },
  {
    path: "Umptnkin",
    element: <Umptnkin/>
  },
  {
    path: "Akmil",
    element: <Akmil/>
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
