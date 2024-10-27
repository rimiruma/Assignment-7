import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './Components/Header';
import Players from './components/Players';



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';
import Footer from './components/Footer';
import FooterTop from './components/FooterTop';

function App() {
  const [coins, setCoins] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  
  const addCoins = () => {
    setCoins(prevCoins => prevCoins + 100000000);
  };

  
  const togglePlayerSelection = (player) => {
    setSelectedPlayers(prevSelected => {
     
     
      
      console.log(player.batting_price);
      console.log(coins);
      
      

      if (prevSelected.includes(player)) {

        setCoins(prevCoins => prevCoins + player.batting_price);  
   

        return prevSelected.filter(p => p !== player);
      } else {
        if (coins >= player.batting_price) {  
          setCoins(prevCoins => prevCoins - player.batting_price);
          toast.success(`${player.player_name} Selected!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          
          return [...prevSelected, player];
        } else {
          alert("Not enough coins!");
          return prevSelected;
        }
      }
    });
  };

  return (
    <>
      <div className='container mx-auto'>
        <Header coins={coins} />
        <Banner addCoins={addCoins} />
        <div>
          <Players
            selectedPlayers={selectedPlayers}
            togglePlayerSelection={togglePlayerSelection}
          />
        </div>
      </div>

      <ToastContainer />
      <FooterTop></FooterTop>
      <Footer></Footer>
      
    </>
  );
}

export default App;