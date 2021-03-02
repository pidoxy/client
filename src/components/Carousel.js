import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Car extends React.Component {
  render() {
    return (
      <div className="pt-3 pb-3 pr-5 pl-5 light">
        <OwlCarousel items={4} autoplayHoverPause={true} autoplay={true} loop>
          <div class="item">
            <p className="text-center carousel_content mr-1">Trumpet</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content mr-1">Violin</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content mr-1">Recorder</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content ">Flute</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content ">Guitar</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content ">Saxophone</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content ">Guitar</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content ">Local Airs</p>
          </div><div class="item">
            <p className="text-center carousel_content ">Foreign Airs</p>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default Car;
