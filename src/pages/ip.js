import axios from 'axios'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './style.css';

const App = () => {
  //creating IP state
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div class="App">
      <header class="App-header">
        <Link to="/home" class="back-button button">back</Link>
        <h1 class="text main-text">Your ip is: <br/> {ip}</h1>
      </header>
    </div>
  );
};

export default App;