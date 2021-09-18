import React, { useState } from 'react';
import { Divider, Grid, Paper, Typography, CircularProgress } from '@material-ui/core';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import Product from '../Products/Product/Product';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import useStyles from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = ({ products, onAddToCart }) => {
    const classes = useStyles();

    console.log(products);
   
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Carousel />
            <div> 

            </div>         
            <Footer />
        </main>
    )
}

export default Home
