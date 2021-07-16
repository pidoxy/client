import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Car extends React.Component {
  render() {
    return (
      <div className="pt-3  pb-3 pr-1 pr-sm-5 pl-sm-5 pl-4 light">
        <OwlCarousel items={4} autoplayHoverPause={true} autoplay={true} loop>
          <div className="item">
            <p className="text-center carousel_content mr-1">Trumpet</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content mr-1">Violin</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content mr-1">Recorder</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content ">Flute</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content ">Guitar</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content ">Saxophone</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content ">Guitar</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content ">Local Airs</p>
          </div>
          <div className="item">
            <p className="text-center carousel_content ">Foreign Airs</p>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default Car;
