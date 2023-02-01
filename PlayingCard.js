import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleState] = useFlip(true)
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleState}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
