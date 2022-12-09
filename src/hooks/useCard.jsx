import { useState } from "react";

export function useCard(card) {

  const [currentCard, setCurrentCard] = useState(0);

  function changeCard(index) {

    if(index < 0 || index >= card.lenght) return;
    setCurrentCard(index);
  }

  return {
    currentCard,
    currentComponent: card[currentCard],
    changeCard,
  };

}