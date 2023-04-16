import React from "react";

function EndGameBanner({ type, numOfGuesses, answer, restartGame }) {
  return (
    <div className={`${type} banner`}>
      {type === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
      <button className="restart" onClick={restartGame}>RESTART</button>
    </div>
  );
}

export default EndGameBanner;
