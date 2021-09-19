import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { selectedProduct } from '../../redux/actions/productActions';

const Products = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const { image, title, price, category, description } = product
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log("Err", err);
        });

        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
      }, [productId]);

return (
    <div>
      <h1>Rikas</h1>      
      <h1>Rikas</h1>
      <h1>Rikas</h1>
      <h1>Rikas</h1>
    </div>
  )
}


export default Products