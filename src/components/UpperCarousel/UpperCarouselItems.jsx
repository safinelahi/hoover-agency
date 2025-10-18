import React from "react";
import img02 from "../../assets/images/Rectangle 2.png";
import UpperCarousel from "./UpperCarousel";

const UpperCarouselItems = () => {
  const firstUpperCarousel = [img02];
  return <div>
    <UpperCarousel 
     firstImages = {firstUpperCarousel}
    />
  </div>;
};

export default UpperCarouselItems;
