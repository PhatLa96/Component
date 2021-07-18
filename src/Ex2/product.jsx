import React, { Component } from "react";
import Phone1 from "../assets/img/sp_blackberry.png";
import Phone2 from "../assets/img/sp_iphoneX.png";
import Phone3 from "../assets/img/sp_note7.png";
import Phone4 from "../assets/img/sp_vivo850.png";
import Laptop1 from '../assets/img/lt_hp.png';
import Laptop2 from '../assets/img/lt_lenovo.png';
import Laptop3 from '../assets/img/lt_macbook.png';
import Laptop4 from '../assets/img/lt_rog.png';

class Product extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid py-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src={Phone2}
                    alt=""
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className=" text-center">iPhone X</h4>
                    <p>
                      iPhone X features a new all-screen design. Face ID, which
                      makes your face your password
                    </p>
                    <button className="btn btn-primary mr-1">Detail</button>
                    <button className="btn btn-danger">Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src={Phone3}
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className=" text-center">Galaxy Note7</h4>
                    <p>
                      The Galaxy Note7 comes with a perfectly symmetrical design
                      for good reason
                    </p>
                    <button className="btn btn-primary mr-1">Detail</button>
                    <button className="btn btn-danger">Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src={Phone4}
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className=" text-center">Vivo</h4>
                    <p>
                      A young global smartphone brand focusing on introducing
                      perfect sound quality
                    </p>
                    <button className="btn btn-primary mr-1">Detail</button>
                    <button className="btn btn-danger">Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-img-top"
                    src={Phone1}
                    alt="Card image"
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className=" text-center">Blackberry</h4>
                    <p>
                      BlackBerry is a line of smartphones, tablets, and services
                      originally designed
                    </p>
                    <button className="btn btn-primary mr-1">Detail</button>
                    <button className="btn btn-danger">Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 bg-light text-dark">
          <h1 className="text-center">BEST LAPTOP</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-top"
                    src={Laptop3}
                    alt=""
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="text-center">MACBOOK</h4>
                    <p>
                      The MacBook is a brand of notebook computers manufactured
                      by Apple Inc
                    </p>
                    <a href="#" className="btn btn-primary mr-1">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-top"
                    src={Laptop4}
                    alt=""
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="text-center">ASUS ROG</h4>
                    <p>
                      the Asus ROG Strix Flare is the latest addition to Asus'
                      lineup of ROG branded devices
                    </p>
                    <a href="#" className="btn btn-primary mr-1">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-top"
                    src={Laptop1}
                    alt=""
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="text-center">HP OMEN</h4>
                    <p>
                      A young global smartphone brand focusing on introducing
                      perfect sound quality
                    </p>
                    <a href="#" className="btn btn-primary mr-1">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="container">
                <div className="card bg-light" style={{ width: 300 }}>
                  <img
                    className="card-top"
                    src={Laptop2}
                    alt=""
                    style={{ maxWidth: "100%", height: 250 }}
                  />
                  <div className="card-body text-center">
                    <h4 className="text-center">LENOVO THINKPAD</h4>
                    <p>
                      The ThinkPad X1 Carbon is a high-end notebook computer
                      released by Lenovo in 2012
                    </p>
                    <a href="#" className="btn btn-primary mr-1">
                      Detail
                    </a>
                    <a href="#" className="btn btn-danger">
                      Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
