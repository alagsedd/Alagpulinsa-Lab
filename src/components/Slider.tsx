import styles from "../styles/Slider.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s1 from "../assets/sliders/alagpulinsa-labs-high-resolution-logo.png";
import s2 from "../assets/sliders/slide2.jpg";
import s3 from "../assets/sliders/slide3.jpg";
import s4 from "../assets/sliders/slide4.jpg";
import s6 from "../assets/sliders/slide6.jpeg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const images = [s1, s6, s2, s3, s4];

  return (
    <>
      <div className={styles.parent}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className={styles.swiper}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                key={index}
                className={styles.image}
                src={image}
                alt="Your browser doesn't support this image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
