import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import {Main} from "./main/Main";
import {Blog3} from "./blog3/Blog3";
import {Blog4} from "./Blog4/Blog4";
import { Blog5 } from './Blog5/Blog5';
import {Blog6} from "./Blog6/Blog6";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Main />
        <Blog3 />
      <Blog4 />
        <Blog5 />
        <Blog6 />
        <Footer />
    </div>
  );
}

export default App;
