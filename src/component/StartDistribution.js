import React from "react";
import { useParams } from "react-router-dom";
import { createDeck, shuffleDeck } from "../utils/deck";
import Player from "./Player";
import { useHistory } from "react-router-dom";

//component for rendering all players with card images
const StartDistribution = () => {
  const history = useHistory();
  const { num } = useParams();
  const startDeck = createDeck();
  let cards = shuffleDeck(startDeck);

  let players = {};
  let playersArray = [];

  //for loop create player array in object
  for (let i = 0; i < parseInt(num); i++) {
    players["player_" + i] = [];
  }

  //distribute card to each player
  while (cards[0] !== undefined) {
    for (let i = 0; i < parseInt(num); i++) {
      if (cards[0] !== undefined) {
        let temp = cards.pop();
        players["player_" + i].push(temp);
      }
    }
  }

  //copy players' object value into playersArray
  for (const player in players) {
    playersArray.push(players[player]);
  }

  const routeHome = () => {
    history.push("/");
  };

  return (
    <div className="m-3">
      <button
        onClick={routeHome}
        className="h-10 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
      >
        Back to homepage
      </button>
      <div className="p-4">
        {playersArray.map((player, index) => (
          <Player playerNumber={index + 1} data={player} />
        ))}
      </div>
    </div>
  );
};

export default StartDistribution;
