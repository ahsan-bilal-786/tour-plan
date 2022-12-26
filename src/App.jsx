import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from 'pages/Layout';
import HotelLanding from 'pages/HotelLanding';
import LightningGenie from 'pages/LightningGenie';
import ParkLanding from 'pages/ParkLanding';
import Attraction from 'pages/Attraction';
import Search from 'pages/Search';
import AttractionDetail from 'pages/AttractionDetail';
import Auth from 'pages/Auth/Login';
import Calculator from 'pages/Calculator';



export const navLinks = [
  {
    path: "/attraction_detail",
    title: "AttractionDetail",
    element: <AttractionDetail />,
  },
  {
    path: "/hotel_Landing",
    title: "HotelLanding",
    element: <HotelLanding />,
  },
  {
    path: "/lightning_genie",
    title: "LightningGenie",
    element: <LightningGenie />,
  },
  {
    path: "/park_landing",
    title: "ParkLanding",
    element: <ParkLanding />,
  },
  {
    path: "/attraction",
    title: "Attraction",
    element: <Attraction />,
  },
  {
    path: "/calculator",
    title: "Calculator",
    element: <Calculator />,
  },
  {
    path: "/auth",
    title: "Auth",
    element: <Auth />,
  },
  {
    path: "/",
    title: "Search",
    element: <Search />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: navLinks 
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
