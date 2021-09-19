import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import useStyles from './styles';
import adidas1 from '../../assets/adidas1.webp';
import adidas2 from '../../assets/adidas2.jpg';
import adidas3 from '../../assets/adidas3.webp';

const Carousels = () => {
    const classes = useStyles();

    return (
        <Carousel 
            width="100%" 
            autoPlay 
            emulateTouch 
            infiniteLoop
            stopOnHover
            interval="5000"
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            className={classes.content}
        >
            <div> 
                <img alt="" src={adidas1} />
            </div>
            <div> 
                <img alt="" src={adidas2} />
            </div>
            <div> 
                <img alt="" src={adidas3} />
            </div>
        </Carousel>
    )
}


export default Carousels;