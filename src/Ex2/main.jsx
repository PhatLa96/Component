import React, { Component } from 'react';
import Header from '../Ex2/header';
import Slider from './slider';
import Product from './product';
import Footer from './footer';
class Main2 extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header/>
                <Slider/>
                <Product/>
                <Footer/>
            </div>
        );
    }
}

export default Main2;