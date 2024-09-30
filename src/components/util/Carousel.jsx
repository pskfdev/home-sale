import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function Carousel() {

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://thepandaproperty.com/wp-content/uploads/2023/08/81076-800x600.jpg"
            className="object-fit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thepandaproperty.com/wp-content/uploads/2023/08/81079-800x600.jpg"
            className="object-fit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thepandaproperty.com/wp-content/uploads/2023/08/81085-800x600.jpg"
            className="object-fit"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
