import React from 'react'
import Divider from './Divider.jsx';
import Product from './Proizvod.jsx';

const Products = ({ products, detaljnije}) => {
    
    return (<> <Divider></Divider>
        <div className="all-products">
            {products.map((prod) => {
               
                return <Product product={prod} detaljnije={detaljnije} key={prod.id} strUpit={0}/>;
            })}
        </div></>



    );
};

export default Products
