import React, { useState } from 'react';
import './GamePageStyle.css';

function GamePage() {
  const [score, setScore] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const [errorVisible, setErrorVisible] = useState(false);
  const [rulesVisible, setRulesVisible] = useState(false);

  const Selection = (e) => {
    if (rulesVisible) {
      setRulesVisible(false);
    }
    if (selectedButton) {
      selectedButton.style.background = "#fff";
      selectedButton.style.color = "#000";
    }
    e.target.style.background = "#000";
    e.target.style.color = "#fff";
    setSelectedButton(e.target);
    setErrorVisible(false);
  };

  const Game = (e) => {
    const rolled = Math.floor(Math.random() * 6 + 1);
    if (selectedButton === null) {
      setErrorVisible(true);
      return;
    }
    if (rulesVisible) {
      setRulesVisible(false);
    }
    e.target.src = `src/assets/dice_${rolled}.png`;
    if (rolled === parseInt(selectedButton.id)) {
      setScore(score + rolled);
    } else {
      setScore(score - 2);
    }
  };

  const Rule = () => {
    setRulesVisible(!rulesVisible);
  };

  return (
    <div className='main_container'>
      {errorVisible && (
        <div className='error'>
          <h3>You have not selected any number</h3>
        </div>
      )}
      <div className='head'>
        <div className='score'>
          <h1><span>{score}</span>Total Score</h1>
        </div>
        <div className='no_guess'>
          <div className='no_select'>
            <button id="1" onClick={(e) => Selection(e)}>1</button>
            <button id='2' onClick={(e) => Selection(e)}>2</button>
            <button id='3' onClick={(e) => Selection(e)}>3</button>
            <button id='4' onClick={(e) => Selection(e)}>4</button>
            <button id='5' onClick={(e) => Selection(e)}>5</button>
            <button id='6' onClick={(e) => Selection(e)}>6</button>
          </div>
          <h3>Select Number</h3>
        </div>
      </div>
      <div className='game'>
        <img src="src\assets\dice_1.png" alt="dice" onClick={(e) => Game(e)} />
        <h3>Click on Dice to roll</h3>
        <button onClick={() => setScore(0)}>Reset Score</button>
        <button id='selected' onClick={Rule}>Show Rules</button>
      </div>
      {rulesVisible && (
        <div className='rule'>
          <h2>How to play dice game</h2>
          <h4>Select any number</h4>
          <h4>Click on dice image</h4>
          <h4>After clicking on the dice, if the selected number matches the rolled number, you will get the same points as the dice.</h4>
          <h4>If you get the wrong guess, 2 points will be deducted.</h4>
        </div>
      )}
    </div>
  );
}

export default GamePage;
