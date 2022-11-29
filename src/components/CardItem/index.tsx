import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight} from "react-icons/bi";

interface PropsImages  {
  images: any;
  title: string;  
  isBorder?: boolean
  handleOnClick: () => void;
}

export function CardItem({ images, handleOnClick, title, isBorder }: PropsImages) {
  const slides = images;
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  // console.log('length', length)
  // console.log('current', current)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setSeconds(seconds => seconds + 1);
  //     if(current === length - 1) {
  //       setCurrent(current + 1);
  //     }
  //     setCurrent(current);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className={`sliderContainer ${isBorder ? 'isBorder' : null}`}>
      <div className="sliderCarrosel">
        {length > 1 && (
          <>
            <button className="leftArrow" onClick={prevSlide}>
              <BiChevronLeft size={20} />
            </button>
            <button className="rightArrow" onClick={nextSlide}>
              <BiChevronRight size={20} />
            </button>
          </>
        )}

        {images.map((row, index) => {
          return (
              <div
                className={index === current ? "slideEdit active" : "slideEdit"}
                key={index}
                style={{ transitionDuration: '0.4s' }}
                onClick={handleOnClick}
              >
                {index === current && (
                  <img
                    src={row.src}
                    style={{ borderRadius: '4px 4px 0 0' }}
                    alt="uma imagem"
                    className="imageSlider"
                  />
                )}
              </div>
          );
        })}
      </div>

      <h2
        onClick={handleOnClick}
        className="slider-info"
        style={{ textAlign: "center" }}
      >
        {title}
      </h2>
    </div>
  );
}
