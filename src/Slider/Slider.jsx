import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ items, title }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: items.length === 1 ? 1 : 3,
    slidesToScroll: items.length === 1 ? 1 : 3,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-20 w-full max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-black">{title}</h2>

      {items.length === 1 ? (
        <div className="p-4 flex justify-center">
          {items[0].type === 'Video' && (
            <video controls className="w-full max-w-md h-auto max-h-[500px] rounded-lg shadow-md">
              <source src={items[0].src} type="video/mp4" />
              Il tuo browser non supporta il tag video.
            </video>
          )}
        </div>
      ) : (
        <Slider {...sliderSettings} className="slick-container">
          {items.map((item, index) => (
            <div key={index} className="p-4">
              {item.type === 'Photography' || item.type === 'Graphics' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[300px] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "";
                  }}
                />
              ) : item.type === 'Video' ? (
                <video controls className="w-full max-w-md h-auto max-h-[500px] rounded-lg shadow-md mx-auto">
                  <source src={item.src} type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
              ) : null}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CustomSlider;
