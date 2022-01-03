import React from 'react'
import Product from './Proizvod.jsx';

const Products = ({ products, detaljnije }) => {
    return (
        <div className="all-products">
            {products.map((prod) => {
               
                return <Product product={prod} detaljnije={detaljnije} key={prod.id} strUpit={0} />;
            })}
        </div>



    );
};

export default Products
