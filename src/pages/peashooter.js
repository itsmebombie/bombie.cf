// heavily inspired by stackoverflow 🤣 (and specky.one)

import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  //creating IP state
  const [ip, setIP] = useState('');
  const [fsize, setFontSize] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const delay = async (ms = 10) => new Promise(resolve => setTimeout(resolve, ms));
  const windowSize = getWindowSize();

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const handleClick = event => {
    // toggle visibility
    setIsVisible(true);
    document.getElementById('video').play();
  };

  //creating function to load ip address from the API
  const getData = async () => {
    var res = await axios.get('https://ipapi.co/json/');
    var info = "";
    const fart = ["yes", "definetly", "most likely", "probably", "true", "1", "i think", "maybe", "idk", "always has been", "💀", "👍", "hmmmm", "guess for yourself :)"];

    res.data["hacked"] = fart[Math.floor(Math.random()*fart.length)];
    res.data["hacked by"] = "bombie.cf";
    res.data["do i remember asking"] = "no";
    res.data["copied from specky.one"] = fart[Math.floor(Math.random()*fart.length)];

    await delay(3000);
    for (var i=0; i < Object.keys(res.data).length; i++) {
      const key = Object.keys(res.data)[i];
      info += key + ": " + res.data[key] + '\n';
      setIP(info);
      setFontSize(Math.min(windowSize.innerHeight/((info.split("\n").length-1)*1.5), windowSize.innerWidth/res.data["ip"].length));
      await delay(60000/66);
    };
  };
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    if (isVisible) {
      getData();
    };
  }, [isVisible]);

  return (
    <div class="App">
      <header class="peashooter-header">
        <h1 id="click-to-start-video" class="clickable hover" onClick={handleClick} style={{visibility: !isVisible ? "visible" : "hidden"}}>click here to start</h1>

        <video id="video" style={{visibility: isVisible ? "visible" : "hidden"}} class='peashooter-video'>
          <source src={require('./assets/video.mp4')} type='video/mp4' />
          <source src={require('./assets/video.mp4')} type='video/ogg' />
          Your browser does not support the video tag.
        </video>
        <pre class="info-text" style={{fontSize: fsize + 'px'}}>{ip}</pre>
      </header>
    </div>
  );
};

export default App;