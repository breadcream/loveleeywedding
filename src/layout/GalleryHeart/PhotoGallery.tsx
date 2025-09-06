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
    objectFit: 'contain', // 전체 이미지가 보이도록 맞추고 싶을 때는 contain / 비율 유지하고 싶을 때는 cover
    width: '60%',
    height: '60%',
    margin: '10%',
    };
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="photoSwiper"
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={-10}
        loop={true}
        style={{
          overflow: 'hidden'
        }}>
        {images.map((src, index) => (
        <SwiperSlide key={index} className="photoSwiperSlide">
          <img src={src} alt={`slide-${index}`} style={smallItemStyles}/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}