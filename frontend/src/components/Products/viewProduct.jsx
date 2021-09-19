import React, { useParams } from "react";
import { useSelector } from "react-redux";
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, Button, Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function ViewProduct() {
  const classes = useStyles();
  console.log(window.location.pathname);
  var initial_url = window.location.pathname;

  var splitURL = initial_url.split("/");
  var productID = splitURL[2];
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div>
      <Card className={classes.root} key={""}>
      <Typography className={classes.price}>
          {products[productID-1].title}
        </Typography>

        <img className={classes.media} src={products[productID-1].image}></img>

        <Typography variant="h6" className={classes.price}>
          LKR {products[productID-1].price}
        </Typography>

        <Typography variant="button" className={classes.txt} >
          {products[productID-1].category}
        </Typography>

        <Typography variant="overline" className={classes.txt}>
          {products[productID-1].description}
        </Typography>

        <CardActions disableSpacing className={classes.cardActions}>
                    <Button component={Link} to="/cart" variant="outlined" className={classes.button} aria-label="Add to Cart" >
                       Add to Cart  <AddShoppingCart />
                    </Button>
        </CardActions>

      </Card>
    </div>
  );
}

export default ViewProduct;
