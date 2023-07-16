import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Blck from "./pages/blck";
import Home from "./pages/home";
import Peashooter from "./pages/peashooter";
import Gambling from "./pages/gambling";
import BlckDownload from "./pages/blck-download";
import Err from "./pages/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blck" element={<BlckDownload />} />
        <Route path="/peashooter" element={<Peashooter />} />
        <Route path="/gambling" element={<Gambling />} />
        <Route path="/*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
console.log(App)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
