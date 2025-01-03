import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageCarousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} autoplay>
      <SwiperSlide>
        <img src="/path/to/image1.jpg" alt="Offer 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/path/to/image2.jpg" alt="Offer 2" />
      </SwiperSlide>
    </Swiper>
  );
}
