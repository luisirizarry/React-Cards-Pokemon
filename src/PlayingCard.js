import React from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks/useFlip";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [currFace, flipFace] = useFlip();

  return (
    <img
      src={currFace ? front : back}
      alt="playing card"
      onClick={flipFace}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
