import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlipCard from "./hooks/hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlipCard(true);
 
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
