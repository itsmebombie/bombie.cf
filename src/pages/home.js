import { Outlet, Link } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <h1 class="main-title">bombie's professional website</h1>
        <Link to="/home" class="main-link">home</Link>
        <Link to="/blck" class="main-link">blck</Link>

        <Outlet />
      </header>
    </div>
  );
};

export default App;