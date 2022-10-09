import { Link } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <h1 class="text main-title">404: not found </h1>
        <Link to="/home" class="button clickable">home</Link>
      </header>
    </div>
  );
};

export default App;