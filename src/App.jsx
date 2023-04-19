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
import TicketCalculator from 'pages/TicketCalculator';
import HeightRequirements from "pages/HeightRequirements"
import TouringPlan from "pages/TouringPlan";
import RequestRoom from "pages/RequestRoom";
import RoomDetails from "pages/RoomDetails";

export const navLinks = [
  {
    path: "/room-details",
    title: "RoomDetails",
    element: <RoomDetails />,
  },
  {
    path: "/request-room",
    title: "RequestRoom",
    element: <RequestRoom />,
  },

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
    path: "/touring-plan",
    title: "Touring Plan",
    element: <TouringPlan />,
  },
  {
    path: "/attraction",
    title: "Attraction",
    element: <Attraction />,
  },
  {
    path: "/ticket-calculator",
    title: "Ticket Calculator",
    element: <TicketCalculator />,
  },
  {
    path: "/calculator",
    title: "Calculator",
    element: <Calculator />,
  },
  {
    path: "/height",
    title: "Height Requirments",
    element: <HeightRequirements />,
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
