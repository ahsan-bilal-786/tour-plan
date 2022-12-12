import './App.css';
import HotelLanding from 'pages/HotelLanding';
import LightningGenie from 'pages/LightningGenie';
import ParkLanding from 'pages/ParkLanding';
import Attraction from 'pages/Attraction';
import Search from 'pages/Search';

const App = () => {
  return (
    <>
      {false && <HotelLanding />}
      {false && <LightningGenie />}
      {false && <ParkLanding />}
      {false && <Attraction />}
      {true && <Search />}
      
    </>
  );
}

export default App;
