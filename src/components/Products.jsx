import React from 'react'
import Product from './Product.jsx';

const Products = ({ products, detaljnije }) => {
    return (
        <div className="all-products">
            {products.map((prod) => {
               
                return <Product product={prod} detaljnije={detaljnije} key={prod.id} />;
            })}
        </div>



    );
};

export default Products
