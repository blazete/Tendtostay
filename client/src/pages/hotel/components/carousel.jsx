import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import hotelImge from '../../../utils/hotel.jpeg'
import { Navigation} from 'swiper/modules';

const ImageCarousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={hotelImge} className='w-full h-full'/></SwiperSlide>
    </Swiper>
  )
}

export default ImageCarousel