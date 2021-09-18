import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.footer} color="primary">
                <Toolbar>
                    <Typography variant="body2" className={classes.title} color="inherit" align="center">
                        © 2021 Dbrax.com.  All rights reserved.
                    </Typography>
                    <div className={classes.grow} />
                </Toolbar>
            </Grid>
        </div>
    )
}

export default Footer
