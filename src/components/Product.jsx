import React from 'react';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router';
import { Link, withRouter } from 'react-router-dom';;




function Product({product, posaljiUpit}) {
   
    
    
   


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
               { <button  className='posaljiUpit'  onClick={() => posaljiUpit(product.naziv, product.id)}> <Link to= {"/proizvodi/"+product.id} className='link' >Pošalji upit</Link></button> }
      
              



               
               
            </div>
        </div>
    )
 
}

export default Product
