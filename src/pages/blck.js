import { Navigate } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <a
          class="back-link"
          href="."
          onClick={<Navigate to="/home" replace />}
          rel="noopener noreferrer"
        >
          back
        </a>

        <img class="blck" width="500" height="500" src={require("../images/blck.webp")} alt="stop posting about blck im tired of seeing it my friends on tiktok " />
        <iframe class="youtube" width="500" height="280" src="https://www.youtube.com/embed/ZMQX9Son3gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <p class="text">stop asking where/how to download blck pweeaaasee owo uwu 😭 </p> 
        <a
          class="link"
          href="https://discord.com/channels/791323294301290546/791324033240530955/1014544806204149840"
          target="_blank"
          rel="noopener noreferrer"
        >
          you should also check this out btw
        </a>
      </header>
    </div>
  );
};

export default App;