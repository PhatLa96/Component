import React, { Component } from 'react';
import Header from './header';
import Slider from './slider';
import Product from './product';
import Footer from './footer';
class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <Product/>
                <Footer/>
            </div>
        );
    }
}

export default Main;