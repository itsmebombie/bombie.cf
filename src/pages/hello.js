import { Link } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <Link to="/home" class="back-button button">back</Link>
        <p class="text">hello</p>
      </header>
    </div>
  );
};

export default App;