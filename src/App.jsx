import { useEffect, useState } from 'react'



function App() {
  const [allPlayers, setAllPlayers] = useState([]);

  // Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
  const cohortName = '2302-acc-pt-web-pt-b';
  // Use the APIURL variable for fetch requests
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(APIURL + "/players");
        const players = await response.json();
        // console.log(players);
        setAllPlayers(players.data.players);
      } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
      }
    }
    fetchAllPlayers();
  }, [])

  console.log(`All Players:`);
  console.log(allPlayers)

  // if(allPlayers!=undefined){
  // return ((
  //   <>
  //     <div className='player'>
  //       <h2>Name: {player.name}</h2>
  //       <p>Breed: {player.breed}</p>
  //       <p>Team: {player.teamId}</p>
  //       <button className='details-button'>See Details</button>
  //       <button className='delete-button'>Delete Player</button>
  //     </div>
  //     {/* <RenderSinglePlayerSummary player={allPlayers[0]}/> */}
  //   </>
  // ))}
}

function RenderAllPlayers({ allPlayers }) {


  <return>(
    {allPlayers.map(player => <RenderSinglePlayerSummary player={player} />)}
    )</return>

}

function RenderSinglePlayerSummary({ player }) {

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
