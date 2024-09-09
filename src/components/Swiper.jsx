// src/components/SwiperComponent.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/swiper.min.css";

// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_1.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_2.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_3.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_4.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_5.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_6.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_7.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_1.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_2.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_3.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_4.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_5.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_6.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_7.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_1.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_2.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_3.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_4.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_5.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_6.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiper-slide">
          <div class="client_logo_item">
            <img
              src="assets/images/clients/client_logo_7.webp"
              alt="Echo - Client Logo Image"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
