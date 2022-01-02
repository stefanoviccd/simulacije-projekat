import React from 'react';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router';
import { Link, withRouter } from 'react-router-dom';;




function Product({product}) {
    
    
   


    return (
        <div className="card"  >
            <img
                className="card-img-top"
                src={product.slika}
                alt="Neka slika"
            />
            <div className="card-body">
                <h5 className="card-title">{product.naziv}</h5>
                <p className="card-text">{product.proizvodjac}</p>
               { <button type='submit' className='posaljiUpit' >Pošalji upit</button> }
      
              



               
               
            </div>
        </div>
    )
 
}

export default Product
