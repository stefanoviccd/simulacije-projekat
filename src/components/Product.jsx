import React from 'react'

function Product({product}) {
    console.log(product.title);
    const stil = { margin: 1 + "em", borderStyle: "dotted" };
    return (
        <div className="card" style={stil}>
            <img
                className="card-img-top"
                src="https:/picsum.photos/200"
                alt="Neka slika"
            />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
        </div>
    )
}

export default Product
