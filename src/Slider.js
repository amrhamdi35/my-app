import { useState } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: "http://picsum.photos/1900", title: "background-1" },
    { url: "http://picsum.photos/2000", title: "background-2" },
    { url: "http://picsum.photos/2100", title: "background-3" },
  ];

  const sliderStyle = {
    backgroundImage: `URL(${slides[currentIndex].url})`,
  };
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="slider">
      <div className="image-slider">
        <div className="image" style={sliderStyle}>
          <div className="cart">
            <h2>Shoes</h2>
            <h3>
              SKiNNY JEANS <i class="heart fa-regular fa-heart"></i>
            </h3>
            <span>$126</span>
            <span class="number">01</span>
          </div>
        </div>
        <div className="dots">
          <div className="arrow-prev" onClick={goToPrev}>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          {slides.map((slide, slideIndex) => (
            <div
              className="dot"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
          <div className="arrow-next" onClick={goToNext}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
