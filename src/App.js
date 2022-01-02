import logo from './logo.svg';
import './App.css';
import Component from './Component';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Kontakt from './components/Kontakt';

function App() {
  const [products] = useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route path="/proizvodi" element={<Main />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
