import './App.css';
import HotelLanding from 'pages/HotelLanding';
import LightningGenie from 'pages/LightningGenie';
import ParkLanding from 'pages/ParkLanding';
import Attraction from 'pages/Attraction';

const App = () => {
  return (
    <>
      {false && <HotelLanding />}
      {false && <LightningGenie />}
      {false && <ParkLanding />}
      {true && <Attraction />}
    </>
  );
}

export default App;
