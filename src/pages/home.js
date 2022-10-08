import { Link } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <h1 class="text main-title">bombie's website</h1>
        <Link to="/home" class="button">home</Link>
        <Link to="/blck" class="button">blck</Link>
        <Link to="/ip" class="button">dont click 😳😳😳</Link>
      </header>
    </div>
  );
};

export default App;