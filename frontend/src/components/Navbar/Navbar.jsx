import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';


import logo from '../../assets/DbraxWhite.png';
import useStyles from './styles';

import SearchBar from "material-ui-search-bar";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <div>
            <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="30px" className={classes.image} />
                    </Typography>
                    <SearchBar
                        className={classes.search}
                        placeholder="Type the product name to search"
                    />
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="secondary" >
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> 
                </Toolbar>
            </AppBar>
        </div>
        </div>
    )
}

export default Navbar