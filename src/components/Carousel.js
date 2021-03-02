import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Car extends React.Component {
  render() {
    return (
      <div className="pt-3 pb-3 pr-3 pl-3 light">
        <OwlCarousel items={3} autoplayHoverPause={true} autoplay={true} loop>
          <div class="item">
            <p className="text-center carousel_content m-1">TRUMPET</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">VIOLIN</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">RECORDER</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">FLUTE</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">GUITAR</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">SAXOPHONE</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">GUITAR</p>
          </div>
          <div class="item">
            <p className="text-center carousel_content m-1">LOCAL AIRS</p>
          </div><div class="item">
            <p className="text-center carousel_content m-1">FOREIGN AIRS</p>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}
export default Car;
