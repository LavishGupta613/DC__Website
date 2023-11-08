import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = [
  {
    url: "https://iitj.ac.in/plasma2022/images/iitjcampus.jpg",
  },
  {
    url: "https://iitj.ac.in/techscape/vol04/issue01/sliderimg/19_28072023.jpg",
  },
  {
    url: "https://iitj.ac.in/uploaded_docs/1_21072022.jpg",
  },
];

const App = () => {
  return (
    <div className="slider-wrapper">
      <div className="slider-overlay"></div>
      <SimpleImageSlider
        width={1518}
        height={550}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
};

export default App;
