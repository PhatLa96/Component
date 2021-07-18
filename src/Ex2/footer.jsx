import React, { Component } from "react";
import Promotion1 from "../assets/img/promotion_1.png";
import Promotion2 from "../assets/img/promotion_2.png";
import Promotion3 from "../assets/img/promotion_3.jpg";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="py-5">
          <h1 class="text-center text-white">PROMOTION</h1>
          <div className="container bg-light py-5 px-4">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 px-4">
                <img src={Promotion1} alt="" style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 px-4">
                <img src={Promotion2} alt="" style={{width:"100%"}} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 px-4">
                <img src={Promotion3} alt="" style={{width:"100%"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

