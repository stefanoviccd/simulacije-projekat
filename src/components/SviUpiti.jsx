import React from 'react'
import Product from './Proizvod';


function SviUpiti({ upiti, otkaziUpit, totalPrice, potvrdiPorudzbinu }) {
    return (
        <>  
        <div className="all-products main">
            
            {upiti.map((upit) => {
                return <Product product={upit} strUpit={1} otkaziUpit={otkaziUpit}/>;
            })}

           
        </div>

  

       {upiti.length === 0 ? (
                    <>
                       <div style={{marginBottom: 31+"%"}}></div>
                    </>
                ) : (
                    <>
                    <div className='ukupno'>Ukupna cena: {totalPrice}</div>
                    <button className='potvrdiPorudzbinu' onClick={potvrdiPorudzbinu}>Potvrdi porudzbinu</button> </>
                )}
                <div id="uspešno" style={{ visibility: "hidden" }}>
                Porudzbina je uspešno prosledjena.
        </div>
</>

    )
}

export default SviUpiti
