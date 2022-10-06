import { Navigate } from "react-router-dom";
import './style.css';

const App = () => {
  return (
    <div class="App">
      <header class="App-header">
        <p class="text">404 not found </p> 
        <a
          class="link"
          href="."
          onClick={<Navigate to="/home" replace />}
          rel="noopener noreferrer"
        >
          click here to return to the home page
        </a>
      </header>
    </div>
  );
};

export default App;