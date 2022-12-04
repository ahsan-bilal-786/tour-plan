import './App.css';
import HotelLanding from 'pages/HotelLanding';
import LightningGenie from 'pages/LightningGenie';
import ParkLanding from 'pages/ParkLanding';
import Search from 'pages/Search';

const App = () => {
  return (
    <>
      {false && <HotelLanding />}
      {false && <LightningGenie />}
      {false && <ParkLanding />}
      {true && <Search />}
      
    </>
  );
}

export default App;
