import { toast } from 'react-toastify';
import { useEffect, useState } from "react";

const Players = ({ selectedPlayers, togglePlayerSelection }) => {
  const [players, setPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    fetch('player.json')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  const displayedPlayers = showSelected ? selectedPlayers : players;
  const handleAddCoins = () => {
    addCoins();
    toast.success("Coins Added!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center ml-10">
        <h1 className="mt-20 text-3xl font-bold mb-10">
          {showSelected ? "Selected Players" : "Available Players"}
        </h1>
        <div className="flex gap-5 mr-10">
          <button className="btn bg-[#E7FE29] rounded-full px-10" onClick={() => setShowSelected(false)}>Available</button>
          <button className="btn bg-[#E7FE29] rounded-full px-10" onClick={() => setShowSelected(true)}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>



      {
        showSelected ?

          <div className="grid gap-5 grid-cols-1 ">
            {displayedPlayers.map(player => (
              <div key={player.id} className="card bg-base-100 border">
                <div className='flex '>
                  <div>
                    <figure>
                      <img className=" w-20 h-20 rounded-full mt-5" src={player.player_image} alt={player.player_name} />
                    </figure>
                  </div>
                  
                  <div className="card-body">
                    <div className='flex items-center gap-2'>
                      <i class="fa-solid fa-user"></i>
                      <h2 className="card-title">{player.player_name}</h2>
                    </div>


                    <div className="flex justify-between">
                      <p>{player.batting_type}</p>

                    </div>
                    <div className="card-actions  justify-end">

                      <button
                        className="btn"
                        onClick={() => togglePlayerSelection(player)}
                      >
                        {/* Choose Player */}
                        {selectedPlayers.includes(player) ? <i class="fa-regular fa-trash-can"></i> : "Choose Player"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={() => setShowSelected(false)} className=' btn bg-[#E7FE29] rounded-full w-40 font-semibold'>Add More Player</button>
          </div>


          :

          <div className="grid gap-5 grid-cols-3 mb-20">
            {displayedPlayers.map(player => (
              <div key={player.id} className="card bg-base-100 border">
                <figure className="player h-[200px] w-[350px] mx-auto object-cover">
                  <img className="rounded-xl h-full w-full object-cover mt-5" src={player.player_image} alt={player.player_name} />
                </figure>
                <div className="card-body">
                  <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-user"></i>
                    <h2 className="card-title">{player.player_name}</h2>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <i className="fa-solid fa-flag"></i>
                      <p>{player.player_country}</p>
                    </div>
                    <div>
                    <button className="w-[150px] border-2 p-1 mr-5 bg-gray-200 rounded-full">All-Rounder</button>                    </div>
                  </div>
                  <hr />
                  <p>{player.Rating}</p>
                  <div className="flex justify-between">
                    <p>{player.batting_type}</p>
                    <p>{player.player_role}</p>
                  </div>
                  <div className="card-actions flex justify-between items-center">
                    <p>Price: {player.batting_price}</p>
                    <button
                      className="btn bg-[#E7FE29] rounded-full px-10"
                      onClick={() => togglePlayerSelection(player)}
                    >
                      Choose Player

                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      }
    </div>
  );
};

export default Players;