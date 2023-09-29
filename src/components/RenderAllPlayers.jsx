import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllPlayersApi } from "../Api";

export function RenderAllPlayers({ setSinglePlayerID }) {
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
    }, []);


    if (!isLoading) {
        function handleDetails(playerId) {
            setSinglePlayerID(playerId);
            naviagte("/singlePlayer");
        }
        return (
            <div>
                {allPlayers.map((player) => {
                    return (
                        <div className='player' key={player.id}>
                            <img src={player.imageUrl}></img>
                            <h2>Name: {player.name}</h2>
                            <p>Breed: {player.breed}</p>
                            <p>Cohort: {player.cohortId}</p>
                            <button className='details-button' onClick={() => handleDetails(player.id)}>See Details</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}
