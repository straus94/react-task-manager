import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './template/header/header.component';
import { Body } from './template/body/body.component';

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
    </div>
  );
}

export default App;
