import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from  "./Ai.jpg";
import img2 from  "./Arti.jpg";
import img3 from "./D.jpg";
export default function App() {
  const sliderImages = [
    {
      url:
        img1
    },
    {
      url:
        img2
    },
    {
      url:
        img3
    }
  ];
  return (
    <div>
      <SimpleImageSlider
        width={1518}
        height={550}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}
