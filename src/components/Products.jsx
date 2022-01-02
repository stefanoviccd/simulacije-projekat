import React from 'react'
import Product from './Product.jsx';

const Products= ({products}) =>{
    return (
        <div className="all-products">
            {products.map((prod) => {
        return <Product product={prod} key={prod.id} />;
      })}
              </div>


      
    );
};

export default Products
