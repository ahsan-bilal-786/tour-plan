import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HotelLanding from 'pages/HotelLanding';
import LightningGenie from 'pages/LightningGenie';
import ParkLanding from 'pages/ParkLanding';
import Attraction from 'pages/Attraction';
import Search from 'pages/Search';

const router = createBrowserRouter([
  {
    path: "/hotel_Landing",
    element: <HotelLanding />,
  },
  {
    path: "/lightning_genie",
    element: <LightningGenie />,
  },
  {
    path: "/park_landing",
    element: <ParkLanding />,
  },
  {
    path: "/attraction",
    element: <Attraction />,
  },
  {
    path: "/",
    element: <Search />,
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
