import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



export default class Poster extends Component {
    
    render() {
        return (

            <div>

            <Carousel >
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                    <p className="legend">Legend 5</p>
                </div> 
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                    <p className="legend">Legend 7</p>
                </div>              
                
            </Carousel>

            </div>
           
           
         
        );
    }
}