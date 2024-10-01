import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function Carousel({ url }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {url &&
          url.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img src={item} className="object-fit" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Carousel;
