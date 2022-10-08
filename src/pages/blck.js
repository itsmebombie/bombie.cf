import { Link, useNavigate } from "react-router-dom";
import './style.css';

const App = () => {
  const navigate = useNavigate();
  return (
    <div class="App">
      <header class="App-header">
        <Link to="/home" class="back-button button">back</Link>

        <img class="blck hover" onClick={()=>{navigate("/images/blck.webp");navigate(0)}} width="500" height="500" src={require("./images/blck.webp")} alt="stop posting about blck im tired of seeing it my friends on tiktok " />
        <iframe class="youtube hover" width="500" height="280" src="https://www.youtube.com/embed/ZMQX9Son3gY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

        <p class="text">stop talking about blck pleaseee 😭 </p> 
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