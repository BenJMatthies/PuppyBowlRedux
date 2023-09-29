// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-acc-pt-web-pt-b';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * GETs an array of all player objects
 * @returns An array of all player objects.
 */
export const fetchAllPlayersB = async () => {
    try {
        const response = await fetch(APIURL + "/players");
        const players = await response.json();
        // console.log(players);
        return players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

/**
 * GETs an object with data for the player with the passed ID
 * @param playerId The database ID of the player to GET data for
 * @returns an object with the requested player data
 */
export const fetchSinglePlayer = async (playerId) => {
    try {
        getURL = `${APIURL}/players/${playerId}`;
        const response = await fetch(getURL);
        const player = await response.json();
        return player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

//UNUSED
// const addNewPlayer = async (playerObj) => {
//     try {

//     } catch (err) {
//         console.error('Oops, something went wrong with adding that player!', err);
//     }
// };

/**
 * Method to DELETE a player from the database.
 * @param playerId The database ID of the player to remove 
 * @returns response after attempting to DELETE player
 */
export const removePlayer = async (playerId) => {
    try {
        playerURL = `${APIURL}/players/${playerId}`;
        const response = await fetch(playerURL, {
            method: "DELETE",
            headers:
            {
                "Content-Type": "application/json",
            }
        });
        return response;
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};
