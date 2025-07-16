import React, { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const Tenzi = () => {
  const getAllNewDices = () => {
    const diceArray = [];
    for (let i = 1; i <= 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  };
  const [dice, setDice] = useState(() => getAllNewDices());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  const hold = (id) => {
    const newDice = dice.map((die) =>
      die.id == id ? { ...die, isHeld: !die.isHeld } : die
    );

    setDice(newDice);
  };

  const handleRollDice = () => {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }else{
      setDice(getAllNewDices())
    }
  };

  const diceElement = dice.map((dice) => (
    <Die
      key={dice.id}
      value={dice.value}
      id={dice.id}
      hold={hold}
      isHeld={dice.isHeld}
    />
  ));
  return (
    <main className="border text-center p-6 w-lg h-105 bg-white rounded-xl">
      {gameWon && <Confetti />}
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
        className="bg-purple-800 text-lg cursor-pointer text-white px-4 py-2 rounded-md shadow-lg"
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default Tenzi;
