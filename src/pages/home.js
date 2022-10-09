import { Link } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <h1 class="text main-title">bombie's website</h1>
        <Link to="/blck" class="button clickable">blck</Link>
        <Link to="/peashooter" class="button clickable" target="_blank" rel="noopener">funny peashooter thing 🤣</Link>
      </header>
    </div>
  );
};

export default App;