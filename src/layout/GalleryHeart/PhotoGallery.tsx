// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import images from "./Images.ts";
import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function PhotoGallery() {
    const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover', // 전체 이미지가 보이도록 맞추고 싶을 때는 contain / 비율 유지하고 싶을 때는 cover
    width: '100%',
    height: '100%'
  };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={45}
        loop={true}
        style={{
          marginTop: '-70%'
        }}>
        {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`slide-${index}`} style={smallItemStyles}/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}