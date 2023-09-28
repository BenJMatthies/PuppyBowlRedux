import { useEffect, useState } from 'react'
import { fetchAllPlayers } from './Api';

function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState(null);

  useEffect(()=>{
    async () => {
    setAllPlayers = fetchAllPlayers();
    console.log(allPlayers);}
  }, [])


  return ((
    <>
      <RenderAllPlayers allPlayer={allPlayers} setAllPlayers={setAllPlayers}/>
    </>
  ))
}

function RenderAllPlayers({allPlayers, setAllPlayers}) {
  
  
  <return>(
    {allPlayers.map(player => <RenderPlayerAll player={player} />)}
    )</return>

}

function RenderPlayerAll({ player }) {

  return (
    <div className='player'>
      <h2>Name: {player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Team: {player.teamId}</p>
      <button className='details-button'>See Details</button>
      <button className='delete-button'>Delete Player</button>
    </div>
  )
}

export default App
