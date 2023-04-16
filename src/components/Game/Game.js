import React, { useEffect, useState } from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import EndGameBanner from "../EndGameBanner/EndGameBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  // console.info("answer:", answer);
  // console.log("guesses:", guesses);

  const handleGuessSubmit = (tentativeGuess) => {
    setGuesses([...guesses, tentativeGuess]);
  };

  const correctGuess = guesses.find((guess) => guess === answer);
  // console.log("correctGuess", correctGuess);

  const restartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  return (
    <>
      {correctGuess || guesses.length === 6 ? (
        <EndGameBanner
          type={correctGuess ? "happy" : "sad"}
          numOfGuesses={guesses.length}
          answer={answer}
          restartGame={restartGame}
        />
      ) : null}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        endGame={correctGuess || guesses.length === 6 ? true : false}
      />
    </>
  );
}

export default Game;
