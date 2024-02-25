// heavily inspired by stackoverflow 🤣 (and specky.one)
import { useState } from 'react';
import './style.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    // toggle visibility
    setIsVisible(true);
    document.getElementById('video').play();
  };

  return (
    <div class="App">
      <header class="blck-download-header comic-sans">
        <div style={{visibility: !isVisible ? "visible" : "hidden", "max-width": "40%"}}>
          <h1>BLCK Download Page</h1>
          <a href="#download">Jump to download</a>
          <p>This is the BLCK download page. BLCK is a program developed by FlowVix. It was programmed to make it easier to code in SPWN by making use of Scratch-like visual coding. BLCK is a heavenly program and we should all thank FlowVix for it. He is a true god among SPWN users. Download BLCK using the button below! You're not gonna regret it. (I guess it was worth the wait)</p>
          <br/>
          <h3>Blck features:</h3>
          <ul style={{"display": "inline-block", "text-align": "left"}}>
            <li>Everything you can do in SPWN you can also do in BLCK!</li>
            <li>AI generator for BLCK!</li>
            <li>Latest version!</li>
            <li>Free Daily CP! (Creator Points, pls dont cancel me)</li>
            <li>Geometry Dash r34</li>
            <li>Auto rate level!</li>
            <li>BLCK Version 0.23</li>
            <li>Using RWRT (latest SPWN version)</li>
            <li>Geometry Dash 2.3 features! (beta version only)</li>
            <li><a href="/404">click here for free robux</a></li>
            <li>Price: $0.00</li>
            <li>Download size: 17.1 MB (beta: 23.9 MB)</li>
            <li>Access any webpage in pure gd! (also works for others)</li>
            <li><i>And many more!</i></li>
          </ul>
          <br/>
          <button id="download" class="blck-download-button clickable comic-sans" onClick={handleClick}>Download BLCK</button>
          <br/>
          <button class="blck-download-beta-button clickable comic-sans" onClick={handleClick}>Download BLCK beta (buggy)</button>
          <p></p>
        </div>

        <video id="video" style={{visibility: isVisible ? "visible" : "hidden"}} class='peashooter-video'>
          <source src={require('./assets/blck.mp4')} type='video/mp4' />
          <source src={require('./assets/blck.mp4')} type='video/ogg' />
          imcompatible browser
        </video>
      </header>
    </div>
  );
};

export default App;
