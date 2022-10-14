// totally not inspired by specky.one/sugo 🤡

import { Link } from "react-router-dom";
import { useState } from 'react';
import './style.css';

const App = () => {
  const [money, setMoney] = useState(Math.floor(Math.random()*50)+5);
  const [gambleText, setGambleText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const randomMoney = () => {
    const price = 5;
    const chance = Math.random();
    var amt = Math.floor(Math.random()*5);
    var text = "";
    var jackpotText = "";

    if (chance < 0.0005) {amt=Math.abs(amt*500); jackpotText = "the grand prize! you have been credited with "} else
    if (chance < 0.005) {amt=Math.abs(amt*250); jackpotText = "the second prize! you have been credited with "} else
    if (chance < 0.05) {amt=Math.abs(amt*100); jackpotText = "the third prize! you have been credited with "};

    switch (Math.sign(amt)) {
      case 1: text = `you won ${jackpotText}$${amt}`; break;
      case -1: text = `you lost $${-amt}`; break;
      default: text = `you didn't win anything`; break;
    };

    const calc = money+amt-price;
    if (calc < price) {lose()} else {setGambleText(text)};

    setMoney(calc);
  };

  const randomMoneyGolden = () => {
    const price = 25;
    if (money < price) {setGambleText("you dont have enough money"); return};
    const chance = Math.random();
    var amt = Math.floor(Math.random()*10);
    var text = "";
    var jackpotText = "";

    if (chance < 0.001) {amt=Math.abs(amt*500); jackpotText = "the grand prize! you have been credited with "} else
    if (chance < 0.01) {amt=Math.abs(amt*250); jackpotText = "the second prize! you have been credited with "} else
    if (chance < 0.1) {amt=Math.abs(amt*100); jackpotText = "the third prize! you have been credited with "};

    switch (Math.sign(amt)) {
      case 1: text = `you won ${jackpotText}$${amt}`; break;
      case -1: text = `you lost $${-amt}`; break;
      default: text = `you didn't win anything`; break;
    };
    
    const calc = money+amt-price;
    if (calc <= 0) {lose()} else {setGambleText(text)};

    setMoney(calc);
  };

  const lose = () => {
    setIsVisible(false);
    setGambleText("bro, yuo lost 🤣🤣🤣");
    setMoney(0);
    document.getElementById('sound').play();
  }

  return (
    <div class="App">
      <header class="App-header">
        <h3 class="text" style={{visibility: isVisible ? "visible" : "hidden"}}>your money: ${money}</h3>
        <h5 class="text">{gambleText}</h5>
        <button class="button clickable" onClick={randomMoney} style={{visibility: isVisible ? "visible" : "hidden"}}>click here to buy a normal ticket (price: $5, normal rewards)</button>
        <button class="button clickable" onClick={randomMoneyGolden} style={{visibility: isVisible ? "visible" : "hidden"}}>click here to buy a golden ticket (price: $25, better rewards)</button>
        <button class="button clickable" onClick={()=>window.location.reload()} style={{visibility: !isVisible ? "visible" : "hidden"}}>retry</button>
        <audio id="sound">
          <source src="./assets/laugh.mp3" type="audio/ogg" />
          <source src="./assets/laugh.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </header>
    </div>
  );
};

export default App;