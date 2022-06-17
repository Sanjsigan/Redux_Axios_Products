import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ShowProducts() {
    const products = useSelector((state) => state.allproducts.products);


    const listProduct = products.map((product) => {
        const { id, price, title, image } = product;
        return (

            <div className="card" style={{ width: 300, marginLeft: 30, marginBottom: 30 }} key={id}>
                <img className="card-img-top" src={image} alt="Card image cap" style={{ width: 200, height: 200 }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><b>Pirce : {price}</b></p>

                </div>
                <div style={{ marginBottom: 10 }}>
                    <Link className="btn btn-success" to={`/product/${id}`}>Go product</Link>
                </div>
            </div>

        )
    })

    return (
        <div className='row'>{listProduct}</div>
    )
}

export default ShowProducts;