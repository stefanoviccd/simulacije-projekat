import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Kontakt from './components/Kontakt';
import Products from './components/Products';
import Product from './components/Product';


function App() {
  
  

  const [products] = useState([
    {
      id: 1,
      naziv: "AKRIL BELI MAT",
      proizvodjac:"Konospan",
      slika:"https://drvolux.rs/wp-content/uploads/2021/11/8685-1000x750.jpg"
        
    },
    {
      id: 2,
      naziv: "AKRIL LATTE MAT",
      proizvodjac:"Konospan",
      slika:"https://drvolux.rs/wp-content/uploads/2021/11/7166-1000x750.jpg"
    },
    {
      id: 3,
      naziv: "AKRIL SIVA SJAJ",
      proizvodjac:"Konospan",
      slika:"https://drvolux.rs/wp-content/uploads/2021/11/6299-1000x750.jpg"
    },
    {
      id: 4,
      naziv: "BAGREM TARTUF BRAON",
      proizvodjac:"Univer",
      slika:"https://drvolux.rs/wp-content/uploads/2021/05/8803392618526-500x375.jpg"
    },
    {
      id: 5,
      naziv: "BARLEY BLACKWOOD",
      proizvodjac:"Egger",
      slika:"https://drvolux.rs/wp-content/uploads/2021/05/K021-SN-500x375.jpg"
    },
    {
      id: 6,
      naziv: "BAZALT",
      proizvodjac:"Univer",
      slika:"https://drvolux.rs/wp-content/uploads/2021/06/bazalt-500x375.png"
    },
    {
      id: 7,
      naziv: "BELI MERMER",
      proizvodjac:"Balto",
      slika:"https://drvolux.rs/wp-content/uploads/2021/06/700_fs30_w-1-1000x750.jpg"
    },
    {
      id: 8,
      naziv: "BLONDE LIBERTY ELM",
      proizvodjac:"Univer",
      slika:"https://drvolux.rs/wp-content/uploads/2021/05/K017-PW-500x375.jpg"
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
        <Route
          path="/proizvodi"
          element={<Products products={products}/>}
        />
       
        <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
