import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchSinglePlayerApi } from "../Api";

export function RenderSinglePlayer({ singlePlayerID }) {
    const [player, setPlayer] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

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
        function handleReturn() {
            navigate("/");
        }

        return (
            <div className='player' key={player.id}>
                <img src={player.imageUrl}></img>
                <h2>Name: {player.name}!</h2>
                <p>Breed: {player.breed}</p>
                <p>Status: {player.status}</p>
                <p>Created: {player.createdAt}</p>
                <p>Updated: {player.updatedAt}</p>
                <p>Team: {player.teamId}</p>
                <p>Cohort: {player.cohortId}</p>
                <button className='close-button' onClick={() => handleReturn()}>Return</button>
                <button className='delete-button'>Delete</button>
            </div>
        );
    }
}
