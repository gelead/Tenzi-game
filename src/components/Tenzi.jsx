import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
const Tenzi = () => {
  const getAllNewDices = () => {
    const diceArray = [];
    for (let i = 1; i <= 10; i++) {
      diceArray.push({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() });
    }
    return diceArray;
  };

  const handleRollDice = () => {
    setDiceArray(getAllNewDices());
  };
  const [diceArray, setDiceArray] = useState(getAllNewDices());
  const diceElement = diceArray.map(dice => (
    <Die key={dice.id} value={dice.value} isHeld={dice.isHeld} />
  ));
  return (
    <main className="border text-center p-6 w-lg h-105 bg-white rounded-xl">
      <h1 className="font-bold text-2xl">Tenzi</h1>
      <p className="my-4">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls. Try to get the fastest time!
      </p>
      <section className="grid grid-cols-5 gap-3 my-4 w-full m-auto p-4">
        {diceElement}
      </section>
      <button
        onClick={handleRollDice}
        id="roll"
        className="bg-purple-800 text-lg cursor-pointer text-white px-4 py-2 rounded-md shadow-lg w-20"
      >
        Roll
      </button>
    </main>
  );
};

export default Tenzi;
