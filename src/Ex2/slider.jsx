import React, { Component } from "react";
import Slider1 from '../assets/img/slide_1.jpg'
import Slider2 from '../assets/img/slide_2.jpg'
import Slider3 from '../assets/img/slide_3.jpg'
class Slider extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Slider1} className="d-block w-100" alt="..." style ={{width:"1100px" ,height:"500px"}} />
            </div>
            <div className="carousel-item">
              <img src={Slider2} className="d-block w-100" alt="..." style ={{width:"1100px" ,height:"500px"}}/>
            </div>
            <div className="carousel-item">
              <img src={Slider3} className="d-block w-100" alt="..."style ={{width:"1100px" ,height:"500px"}} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;
