// totally not inspired by specky.one/sugo 🤡

import { useState } from 'react';
import './style.css';

const App = () => {
  const [money, setMoney] = useState(Math.floor(Math.random()*50)+50);
  const [gambleText, setGambleText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  var debounce = Date.now();

  const rand = async (price, prizeMulti, chance1, chance2, chance3) => {
    if (debounce+69 > Date.now()) {return};
    debounce = Date.now();

    if (money < price) {setGambleText("not enough money"); return};

    const chance = Math.random();
    var amt = Math.floor(Math.random()*prizeMulti);
    var text = "";
    var jackpotText = "";

    if (chance < chance1) {amt=Math.abs((amt+1)*500); jackpotText = "the grand prize! you have been credited with "} else
    if (chance < chance2) {amt=Math.abs((amt+1)*250); jackpotText = "the second prize! you have been credited with "} else
    if (chance < chance3) {amt=Math.abs((amt+1)*100); jackpotText = "the third prize! you have been credited with "};

    switch (Math.sign(amt)) {
      case 1: text = `you won ${jackpotText}$${amt}`; break;
      case -1: text = `you lost $${-amt}`; break;
      default: text = `you didn't win anything`; break;
    };

    const calc = money+amt-price;
    if (calc < 5) {lose()} else {setGambleText(text)};

    setMoney(calc);
  }

  const ticket = () => rand(5, 4, 1/1250, 1/250, 1/50);
  const goldenTicket = () => rand(25, 8, 1/625, 1/125, 1/25);
  const platinumTicket = () => rand(100, 16, 1/250, 1/50, 1/10);

  const lose = () => {
    setIsVisible(false);
    setGambleText("bro, you lost 🤣🤣🤣");
    setMoney(-1);
    document.getElementById('sound').play();
  }

  return (
    <div class="App">
      <header class="App-header">
        <h3 class="text" style={{visibility: isVisible ? "visible" : "hidden"}}>your money: ${money}</h3>
        <h5 class="text">{gambleText}</h5>
        
        <button class="button clickable" onClick={ticket} style={{visibility: isVisible ? "visible" : "hidden"}}>buy lottery ticket (price: $5, normal rewards)</button>
        <button class="button clickable" onClick={goldenTicket} style={{visibility: isVisible ? "visible" : "hidden"}}>buy golden ticket (price: $25, better rewards)</button>
        <button class="button clickable" onClick={platinumTicket} style={{visibility: isVisible ? "visible" : "hidden"}}>buy platinum ticket (price: $100, best rewards)</button>
        
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