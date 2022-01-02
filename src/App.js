import logo from './logo.svg';
import './App.css';
import Component from './Component';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Main></Main>
    </BrowserRouter>
  );
}

export default App;
