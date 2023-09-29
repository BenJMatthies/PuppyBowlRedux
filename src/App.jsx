import { useEffect, useState } from 'react'
import { fetchAllPlayersApi } from './Api';



function App() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
  const cohortName = '2302-acc-pt-web-pt-b';
  // Use the APIURL variable for fetch requests
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        // const response = await fetch(APIURL + "/players");
        // const players = await response.json();
        // // console.log(players);
        // setAllPlayers(players.data.players);
        const players = await fetchAllPlayersApi();
        setAllPlayers(players);
        setIsLoading(false);
      } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
      }
    }
    fetchAllPlayers();
  }, [])

  // console.log(`All Players:`);
  // console.log(allPlayers)

  if (!isLoading) {
    return ((
      <RenderAllPlayers allPlayers={allPlayers} />
      // <>
      //   <div>
      //     {allPlayers.map((player) => {
      //       return (
      //         <div>
      //           <h2>Name: {player.name}</h2>
      //           <p>Breed: {player.breed}</p>
      //           <p>Team: {player.teamId}</p>
      //         </div>
      //       )
      //     })}
      //   </div>
      // </>
    ))
  }
}

function RenderAllPlayers({ allPlayers }) {
  return (
    <>
      <div>
        {allPlayers.map((player) => {
          return (
            <div key={player.id}>
              <h2>Name: {player.name}</h2>
              <p>Breed: {player.breed}</p>
              <p>Team: {player.teamId}</p>
              <button className='details-button'>See Details</button>
              <button className='delete-button'>Delete Player</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

async function RenderSinglePlayerSummary({ player }) {

  const receivedPlayer = await player;
  return (
    <div className='player'>
      <h2>Name: {receivedPlayer.name}</h2>
      <p>Breed: {receivedPlayer.breed}</p>
      <p>Team: {receivedPlayer.teamId}</p>
      <button className='details-button'>See Details</button>
      <button className='delete-button'>Delete Player</button>
    </div>
  )
}

export default App
