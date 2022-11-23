import './App.css';
import HotelLanding from 'pages/HotelLanding';
import LightningGenie from 'pages/LightningGenie';
import ParkLanding from 'pages/ParkLanding';

const App = () => {
  return (
    <>
      {false && <HotelLanding />}
      {false && <LightningGenie />}
      {true && <ParkLanding />}
      
    </>
  );
}

export default App;
