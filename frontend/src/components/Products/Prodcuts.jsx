import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, Button } from "@material-ui/core";

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productActions';

const Products = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  
  const dispatch = useDispatch();
  
  const fetchProdcutDetails = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products/$(productId)")
    .catch((err) => {
      console.log("Err",err);
  });
  dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if(productId && productId !== "") fetchProdcutDetails();
  }, [productId]);

return (
  <div>
    <h1>Rikas</h1>
    <h1>Rikas</h1>
    <h1>Rikas</h1>
    <h1>Rikas</h1>
    {/* <Card key={""}>
      <Typography style={{ marginTop: "100px" }}>
        {product[productId].title}
      </Typography>
      <img src={image}></img>
    </Card> */}

  </div>
  
  );
}


export default Products