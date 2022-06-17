import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/action/productActions';

function SelectedProducts() {

    const { id } = useParams();
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const { price, title, image, description } = product;

    console.log(product);

    const getseletcproduct = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
            console.log(err);
        })

        dispatch(selectedProducts(res.data));
    }

    useEffect(() => {
        if (id && id !== "") {
            getseletcproduct()
        }
    }, [id])

    console.log(id)
    return (
        <div className='row container'>

            <div className="col-md-6">

                <div className="card bg-dark text-white" >
                    <img className="card-img" src={image} />
                </div>


            </div>
            <div className="col-md-6">

                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div>
                            <b >Price : {price}</b>
                        </div>
                        <div> <p className="card-text">{description}.</p></div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedProducts;