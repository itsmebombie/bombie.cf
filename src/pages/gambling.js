// totally not inspired by specky.one/sugo 🤡

import { Link } from "react-router-dom";
import { useState } from 'react';
import './style.css';

const App = () => {
  const [money, setMoney] = useState(Math.floor(Math.random()*50)+49);
  const [gambleText, setGambleText] = useState('');
  const [isVisible, setVisiblity] = useState(true);
  const [history, setHistory] = useState('');
  const [historyIsVisible, setHistoryVisiblity] = useState(false);
  const [fsize, setFontSize] = useState('');

  const windowSize = getWindowSize();
  var debounce = Date.now();

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const rand = async (price, prizeMulti, chance1, chance2, chance3, ticketName) => {
    if (debounce+69 > Date.now()) {return};
    debounce = Date.now();

    if (money < price) {setGambleText("not enough money"); return};

    const chance = Math.random();
    var amt = Math.floor(Math.random()*prizeMulti);
    var text = "";
    var jackpotText = "";

    if (chance < chance1) {amt=Math.abs((amt+3)*500); jackpotText = "the grand prize! you have been credited with "} else
    if (chance < chance2) {amt=Math.abs((amt+3)*250); jackpotText = "the second prize! you have been credited with "} else
    if (chance < chance3) {amt=Math.abs((amt+3)*100); jackpotText = "the third prize! you have been credited with "};

    switch (Math.sign(amt)) {
      case 1: text = `you won ${jackpotText}$${amt}`; break;
      case -1: text = `you lost $${-amt}`; break;
      default: text = `you didn't win anything`; break;
    };

    const calc = money+amt-price;
    if (calc < 5) {lose()} else {setGambleText(text)};

    const history_to_add = `${text} after using $${price} to buy a ${ticketName}\n`;
    setFontSize(Math.min(windowSize.innerHeight/((history.split("\n").length-1)*1.5), windowSize.innerWidth/history_to_add.length));
    setFontSize(Math.min(windowSize.innerHeight/((history.split("\n").length-1)*1.5), windowSize.innerWidth/history_to_add.length));
    setHistory(history+history_to_add)
    setMoney(calc);
    
    const audio = document.getElementById('buy-sound');
    audio.currentTime = 0;
    audio.play();
  }

  const ticket = () => rand(5, 4, 1/1250, 1/250, 1/50, "normal ticket");
  const goldenTicket = () => rand(25, 8, 1/625, 1/125, 1/25, "golden ticket");
  const platinumTicket = () => rand(100, 16, 1/250, 1/50, 1/10, "platinum ticket");

  const lose = () => {
    setVisiblity(false);
    setGambleText("bro, you lost 🤣");
    setMoney(-1);
    document.getElementById('lose-sound').play();
  }

  const viewHistory = () => {
    setHistoryVisiblity(!historyIsVisible);
  }

  return (
    <div class="App">
      <header class="App-header">
        <Link to="/home" class="back-button button clickable" style={{visibility: !historyIsVisible ? "visible" : "hidden"}}>back</Link>
        <h3 class="text" style={{visibility: isVisible ? "visible" : "hidden"}}>your money: ${money}</h3>
        <h5 class="text" style={{visibility: !historyIsVisible ? "visible" : "hidden"}}>{gambleText}</h5>
        
        <button class="button clickable" onClick={ticket} style={{visibility: isVisible ? "visible" : "hidden"}}>buy normal ticket (price: $5, normal rewards)</button>
        <button class="button clickable" onClick={goldenTicket} style={{visibility: isVisible ? "visible" : "hidden"}}>buy golden ticket (price: $25, better rewards)</button>
        <button class="button clickable" onClick={platinumTicket} style={{visibility: isVisible ? "visible" : "hidden"}}>buy platinum ticket (price: $100, best rewards)</button>

        <button class="button clickable" onClick={()=>window.location.reload()} style={{visibility: (!historyIsVisible && !isVisible) ? "visible" : "hidden"}}>retry</button>
        <button class="button clickable" onClick={viewHistory} style={{visibility: (!historyIsVisible && !isVisible) ? "visible" : "hidden"}}>view history</button>
        
        <button class="button clickable" onClick={lose} style={{visibility: isVisible ? "visible" : "hidden"}}>lose on purpose lmao</button>
        

        <button class="back-button button clickable" onClick={viewHistory} style={{visibility: (historyIsVisible && !isVisible) ? "visible" : "hidden"}}>back</button>
        <pre id="gambling-history" class="text info-text" style={{visibility: historyIsVisible ? "visible" : "hidden", fontSize: fsize + 'px'}}>{history}</pre>
        
        <audio id="lose-sound">
          <source src="./assets/laugh.mp3" type="audio/ogg" />
          <source src="./assets/laugh.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <audio id="buy-sound">
          <source src="./assets/buy.mp3" type="audio/ogg" />
          <source src="./assets/buy.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </header>
    </div>
  );
};

export default App;