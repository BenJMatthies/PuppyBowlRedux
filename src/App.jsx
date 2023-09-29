import { useEffect, useState } from 'react';
import { Routes, Route, Router, useNavigate } from 'react-router-dom';
import { fetchAllPlayersApi, fetchSinglePlayerApi } from './Api';
import './styles.css';



function App() {
  const [singlePlayerID, setSinglePlayerID] = useState("");

  return (
    <>
      <Routes>
        <Route path="/" element={<RenderAllPlayers setSinglePlayerID={setSinglePlayerID} />}></Route>
        <Route path="/singlePlayer" element={<RenderSinglePlayer singlePlayerID={singlePlayerID} />}></Route>
      </Routes>
    </>
  )

}

function RenderAllPlayers({ setSinglePlayerID }) {
  const [allPlayers, setAllPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const naviagte = useNavigate();

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const players = await fetchAllPlayersApi();
        setAllPlayers(players);
        console.log(players);
        setIsLoading(false);
      } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
      }
    }
    fetchAllPlayers();
  }, [])


  if (!isLoading) {
    function handleDetails(playerId) {
      setSinglePlayerID(playerId);
      naviagte("/singlePlayer");
    }
    return (
      <>
        <div>
          {allPlayers.map((player) => {
            return (
              <div key={player.id}>
                <img src={player.imageUrl} width={300}></img>
                <h2>Name: {player.name}</h2>
                <p>Breed: {player.breed}</p>
                <p>Cohort: {player.cohortId}</p>
                <button className='details-button' onClick={() => handleDetails(player.id)}>See Details</button>
                <button className='delete-button'>Delete Player</button>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

function RenderSinglePlayer({ singlePlayerID }) {
  const [player, setPlayer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // console.log(singlePlayerID);

  useEffect(() => {
    async function fetchSinglePlayer() {
      const data = await fetchSinglePlayerApi(singlePlayerID);
      setPlayer(data);
      setIsLoading(false);
      // console.log(data);
    }
    fetchSinglePlayer();
  }, []);

  if (!isLoading) {
    return (
      <>
        <div key={player.id}>
          <img src={player.imageUrl} width={300}></img>
          <h2>Name: {player.name}!</h2>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Created: {player.createdAt}</p>
          <p>Updated: {player.updatedAt}</p>
          <p>Team: {player.teamId}</p>
          <p>Cohort: {player.cohortId}</p>

          {/* <p><img src="${player.imageUrl}" width="150" /></p>
          <button class="close-button">Close Details</button> */}
        </div>
      </>
    )
  }
}

// function RenderSinglePlayer({ playerId }) {
//   const [player, setPlayer] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   console.log(playerId);
//   useEffect(() => {
//     async function fetchSinglePlayer() {
//       try {
//         const data = fetchSinglePlayerApi(playerId);
//         console.log(data);
//         setPlayer(data);
//         setIsLoading(false);
//       }
//       catch (e) {
//         console.error('Uh oh, trouble fetching player!', e);
//       }
//     }
//     fetchSinglePlayer();
//   })

//   return (
//     <>
//       <div key={player.id}>
//         <h2>Name: ${player.name}!</h2>
//         <p>Breed: ${player.breed}</p>
//         <p>Status: ${player.status}</p>
//         <p>Created: ${player.createdAt}</p>
//         <p>Updated: ${player.updatedAt}</p>
//         <p>Team: ${player.teamId}</p>
//         <p>Cohort: ${player.cohortId}</p>
//         <p><img src="${player.imageUrl}" width="150" /></p>
//         <button class="close-button">Close Details</button>
//       </div>
//     </>
//   )
// }

export default App
