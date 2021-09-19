import React from "react";
import { useSelector } from "react-redux";

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

//import logo from '../../assets/DbraxBlack.png';

const Products = ({ image, productName }) => {
  const classes = useStyles();

  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    console.log("This is printing, ", products);

    const { id, title, image, price, category } = product;
    return (
      <div>
        <Card className={classes.root}  key={id} >
          {/* <Link to={`/product/${id}`}> */}
          <Link to={`/viewProduct/${id}`}>
            <CardMedia className={classes.media} image={image} />
          </Link>

          <CardContent>
            <div className={classes.cardContent} >
              <div>
                <Typography variant="h6" className={classes.price}>
                  LKR {price}
                </Typography>
                <Typography
                  className={classes.txt}
                  variant="button"
                  display="block"
                  gutterBottom
                >
                  {category}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Products;
