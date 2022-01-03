import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Kontakt from './components/Kontakt';
import Products from './components/Products';
import Upit from './components/Upit';
import SviUpiti from './components/SviUpiti';






function App() {



  const [cartNum, setCartNum] = useState(0);
  const [products] = useState([
    {
      id: 1,
      naziv: "AKRIL BELI MAT",
      proizvodjac: "Konospan",
      slika: "https://drvolux.rs/wp-content/uploads/2021/11/8685-1000x750.jpg",
      debljina: 18.3,
      duzina: 1300,
      sirina: 1800,
      nacinProdaje: "CELA",
      kolicina: 0

    },
    {
      id: 2,
      naziv: "AKRIL LATTE MAT",
      proizvodjac: "Konospan",
      slika: "https://drvolux.rs/wp-content/uploads/2021/11/7166-1000x750.jpg",
      debljina: 15.3,
      duzina: 1000,
      sirina: 1800,
      nacinProdaje: "CELA",
      kolicina: 0
    },
    {
      id: 3,
      naziv: "AKRIL SIVA SJAJ",
      proizvodjac: "Konospan",
      slika: "https://drvolux.rs/wp-content/uploads/2021/11/6299-1000x750.jpg",
      debljina: 18.5,
      duzina: 1450,
      sirina: 1900,
      nacinProdaje: "CELA",
      kolicina: 0
    },
    {
      id: 4,
      naziv: "BAGREM TARTUF BRAON",
      proizvodjac: "Univer",
      slika: "https://drvolux.rs/wp-content/uploads/2021/05/8803392618526-500x375.jpg",
      debljina: 18.3,
      duzina: 1300,
      sirina: 2000,
      nacinProdaje: "CELA",
      kolicina: 0,

    },
    {
      id: 5,
      naziv: "BARLEY BLACKWOOD",
      proizvodjac: "Egger",
      slika: "https://drvolux.rs/wp-content/uploads/2021/05/K021-SN-500x375.jpg",
      debljina: 20,
      duzina: 1600,
      sirina: 1800,
      nacinProdaje: "CELA",
      kolicina: 0,

    },
    {
      id: 6,
      naziv: "BAZALT",
      proizvodjac: "Univer",
      slika: "https://drvolux.rs/wp-content/uploads/2021/06/bazalt-500x375.png",
      debljina: 20.5,
      duzina: 1900,
      sirina: 2100,
      nacinProdaje: "CELA",
      kolicina: 0,
    },
    {
      id: 7,
      naziv: "BELI MERMER",
      proizvodjac: "Balto",
      slika: "https://drvolux.rs/wp-content/uploads/2021/06/700_fs30_w-1-1000x750.jpg",
      debljina: 10,
      duzina: 1300,
      sirina: 1800,
      nacinProdaje: "CELA",
      kolicina: 0
    },
    {
      id: 8,
      naziv: "BLONDE LIBERTY ELM",
      proizvodjac: "Univer",
      slika: "https://drvolux.rs/wp-content/uploads/2021/05/K017-PW-500x375.jpg",
      debljina: 15.8,
      duzina: 2300,
      sirina: 1800,
      nacinProdaje: "CELA",
      kolicina: 0
    },

  ]);
  const [searchProduct, setsearchProduct] = useState(products[0]);
  const [cartProducts, setCartProducts] = useState([]);

  function refreshCart() {
    let newProducts = products.filter((prod) => prod.kolicina > 0);
    setCartProducts(newProducts);
    console.log("Broj u korpi: " + newProducts.length)
    console.log("Broj u korpi: " + cartProducts.length)


  }
  function detaljnije(id) {
    products.forEach((prod) => {
      if (prod.id === id) {
        setsearchProduct(prod);
      }

    });

  }
  function posaljiUpit(id, kolicina) {
  
    let num = parseInt(kolicina);
    products.forEach((prod) => {
      if (prod.id === id) {
        if(prod.kolicina===0)  setCartNum(cartNum + 1);
        prod.kolicina = prod.kolicina + num;
        console.log("Kolicina proizvoda: " + prod.kolicina);
      }

    }
    );
    refreshCart();
  }
  function otkaziUpit(id, kolicina) {
    setCartNum(cartNum - 1);
    let num = parseInt(kolicina);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.kolicina = prod.kolicina - num;
        console.log("Kolicina proizvoda: " + prod.kolicina);
      }

    }
    );
    refreshCart();
  }




  return (
    <BrowserRouter>
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/proizvodi/:id"
          element={<Upit product={searchProduct} posaljiUpit={posaljiUpit} />}
        />
        <Route
          path="/proizvodi"
          element={<Products products={products} detaljnije={detaljnije} />}


        />
        <Route
          path="/upiti"
          element= {
            <SviUpiti upiti={cartProducts} otkaziUpit={otkaziUpit} />}
        

        />


        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer></Footer>

    </BrowserRouter>
  );
}
export default App;

