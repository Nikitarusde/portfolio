import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Main} from "./components/main/Main";
import {Portfolio} from "./components/portfoöio/Portfolio";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <About/>
        <Portfolio/>
    </div>
  );
}

export default App;
