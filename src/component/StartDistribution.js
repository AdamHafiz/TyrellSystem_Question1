import React from "react";
import { useParams } from "react-router-dom";
import { createDeck, shuffleDeck } from "../utils/deck";
import Player from "./Player";

//component for rendering all players with card images
const StartDistribution = () => {
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

  return (
    <div className="p-4">
      {playersArray.map((player, index) => (
        <Player playerNumber={index + 1} data={player} />
      ))}
    </div>
  );
};

export default StartDistribution;
