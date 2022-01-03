import React from 'react'
import Product from './Product';


function SviUpiti({ upiti, otkaziUpit }) {
    return (

    <div className="all-products main">
            
            {upiti.map((upit) => {
                return <Product product={upit} strUpit={1} otkaziUpit={otkaziUpit}/>;
            })}
        </div>

    )
}

export default SviUpiti
