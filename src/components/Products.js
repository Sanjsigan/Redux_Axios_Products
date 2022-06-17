import React, { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from '../redux/action/productActions'
import { useSelector, useDispatch } from 'react-redux'
import ShowProducts from './ShowProducts';

function Products() {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const listProduct = async () => {
        const res = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(res.data));
    }

    useEffect(() => {
        listProduct();

    }, []);
    console.log(products)

    return (
        <div>
            <ShowProducts />
        </div>
    );
}

export default Products;