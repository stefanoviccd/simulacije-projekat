import React from 'react'

function Upit({ product }) {
    console.log(product.naziv);
    return (
        <div className='gridDiv'>
            <div className='product-img'>
                <img src={product.slika}></img>
            </div>
            <div className='product-info'>
                <h2>{product.naziv}</h2>

                <p className='dp' ><b>Šifra proizvoda: {product.id}</b></p>
                <p className='dp'>Proizvodjač: {product.proizvodjac}</p>
                <p className='dp'>Debljina: {product.debljina}</p>
                <p className='dp'>Dužina: {product.duzina}</p>
                <p className='dp'>Širina: {product.sirina}</p>
                <p className='dp'>Način prodaje: {product.nacinProdaje}</p>
                <label className='dpl' >Količina

                    <input type="text" name="name" style={{ width: 100 + "px", marginLeft: 10 + "px" }} />
                </label><br></br>
                <button className='btnUpit'>Pošalji upit</button>


            </div>

        </div>
    )
}

export default Upit
