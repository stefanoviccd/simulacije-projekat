import React from 'react'
import Product from './Product.jsx';

const Products = ({ products, posaljiUpit }) => {
    return (
        <div className="all-products">
            {products.map((prod) => {
               
                return <Product product={prod} posaljiUpit={posaljiUpit} key={prod.id} />;
            })}
        </div>



    );
};

export default Products
