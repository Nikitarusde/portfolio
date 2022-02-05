import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Main} from "./components/main/Main";
import {Portfolio} from "./components/portfoöio/Portfolio";
import {Offer} from "./components/offer/Offer";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <About/>
        <Portfolio/>
        <Offer/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
