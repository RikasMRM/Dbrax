import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Product from '../Products/Product/Product';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import useStyles from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { setProducts } from '../../redux/actions/productActions';

import axios from 'axios';

const Home = ({ products }) => {
    const classes = useStyles();
    
    const dispatch = useDispatch();

    const fetchProdcuts = async () => {
        const response= await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProdcuts();
    }, []);

    console.log("Products: ", products);
   
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Carousel />
            <div> 
                <Product />
            </div>         
            <Footer />
        </main>
    )
}

export default Home
