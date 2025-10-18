import React from "react";
import img1 from "../../assets/images/carousel-01.jpg";
import img2 from "../../assets/images/carousel-02.png";
import img3 from "../../assets/images/carousel-03.png";
import img4 from "../../assets/images/carousel-04.png";
import img5 from "../../assets/images/carousel-05.png";
import img6 from "../../assets/images/carousel-06.png";
import img7 from "../../assets/images/carousel-07.png";
import BottomCarousel from "./BottomCarousel";

const BottomCarouselItems = () => {
    const upperBottomCarousel = [img1, img4, img7];
    const lowerBottomCarousel = [img2, img3, img6];
  const middleBottomCarousel = [img5, img4, img1];

  return (
    <div>
      <BottomCarousel
        upperImages={upperBottomCarousel}
        lowerImages={lowerBottomCarousel}
        middleImages={middleBottomCarousel}
      />
    </div>
  );
};

export default BottomCarouselItems;
