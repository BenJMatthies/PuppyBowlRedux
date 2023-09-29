import { useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import './styles.css';
import { RenderAllPlayers } from './components/RenderAllPlayers';
import { RenderSinglePlayer } from './components/RenderSinglePlayer';


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

export default App
