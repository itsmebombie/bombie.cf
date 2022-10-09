// heavily inspired by stackoverflow 🤣 (and specky.one)

import axios from 'axios'
import { useState, useEffect } from 'react'
import './style.css';
import sample from './assets/video.mp4';

const App = () => {
  //creating IP state
  const [ip, setIP] = useState('');
  const [fsize, setFontSize] = useState('');
  const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))
  var font_size = 300;

  //creating function to load ip address from the API
  const getData = async () => {
    var res = await axios.get('https://ipapi.co/json/');
    var info = "";
    const fart = ["yes", "definetly", "most likely", "probably", "true", "1", "i think", "maybe", "idk", "always has been"]

    res.data["hacked"] = fart[Math.floor(Math.random()*fart.length)];
    res.data["hacked by"] = "bombie.cf";
    res.data["do i remember asking"] = "no";
    res.data["copied from specky.one"] = fart[Math.floor(Math.random()*fart.length)];

    await delay(3000);
    for (var i=0; i < Object.keys(res.data).length; i++) {
      const key = Object.keys(res.data)[i];
      info += key + ": " + res.data[key] + '\n';
      font_size *= 0.954;
      console.log(font_size + "%");
      setIP(info);
      setFontSize(font_size);
      await delay(60000/66);
    }
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  // FUCK YOU FUCK YOU FCUK YOU FCUK YOU FUCK YOU FUCK YOU FUCK YOU FUCK YOU FUCK OYU
  // FINALYYYYYYYY I DID IT YAY FUCK YOU JS FUCK YOU HTML FUCK YOU REACT FUCK YOU FUCK YOU FUCK YOU FUCK YOUUUUUUUUUU 
  return (
    <div class="App">
      <header class="peashooter-header">
        <video class='peashooter-video' autoPlay>
          <source src={sample} type='video/mp4' />
          <source src={sample} type='video/ogg' />
        </video>
          <pre style={{fontSize: fsize + '%'}}>{ip}</pre>
      </header>
    </div>
  );
};

export default App;