import React from 'react'
import { useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => { 
    const classes = useStyles();

    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return(
        
            <div>
                <Card className={classes.root} key={id}>
                <Link to={`/product/${id}`}>
                <CardMedia className={classes.media} image={image} />
                </Link>

                <CardContent>
                <div className={classes.cardContent}>
                <div>
                    <Typography className={classes.txt} variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                        LKR {price}
                    </Typography>
                    <Typography className={classes.txt} variant="button" display="block" gutterBottom>
                        {category}
                    </Typography>
                </div>
                </div>
                </CardContent>      
                </Card>

            </div>
    
            );

    });

    return (
        <>{renderList}</>
    );
};

export default Product
