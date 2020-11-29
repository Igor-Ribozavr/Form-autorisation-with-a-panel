import React from 'react';
import './sliderImages.css';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function SliderImages() {
  const slides = [];
  for (let i = 12; i < 30; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <img
          src={`https://picsum.photos/id/${i + 1}/144/129`}
          style={{ borderRadius: '10px' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <div className="slider">
      <React.Fragment>
        <Swiper
          id="thumbs"
          spaceBetween={4}
          slidesPerView={4}
        >
          {slides}
        </Swiper>
      </React.Fragment>
    </div>
  );
}

export default SliderImages;
