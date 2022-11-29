import React, { useState } from "react";

//ImagesBanner
import bannerBr1 from '../../../public/images/bannerBr1.jpg';
import bannerBr2 from '../../../public/images/bannerBr2.jpg';
import bannerBr3 from '../../../public/images/bannerBr3.jpg';
import bannerBr4 from '../../../public/images/bannerBr4.jpg';
import bannerBr5 from '../../../public/images/bannerBr5.jpg';
import bannerBr6 from '../../../public/images/bannerBr6.jpg';
import bannerBr7 from '../../../public/images/bannerBr7.jpg';
import bannerBr8 from '../../../public/images/banner8.png';
import bannerBr9 from '../../../public/images/bannerBr9.jpg';
import bannerBr10 from '../../../public/images/bannerBr10.jpg';
import bannerBr11 from '../../../public/images/bannerBr11.jpg';
import bannerBr12 from '../../../public/images/bannerBr12.jpg';
import bannerBr13 from '../../../public/images/bannerBr13.jpg';
import bannerBr14 from '../../../public/images/bannerBr14.jpg';

import bannerEn1 from '../../../public/images/bannerEn1.jpg';
import bannerEn2 from '../../../public/images/bannerEn2.jpg';
import bannerEn3 from '../../../public/images/bannerEn3.jpg';
import bannerEn4 from '../../../public/images/bannerEn4.jpg';
import bannerEn5 from '../../../public/images/bannerEn5.jpg';
import bannerEn6 from '../../../public/images/bannerEn6.jpg';
import bannerEn7 from '../../../public/images/bannerEn7.jpg';
import bannerEn9 from '../../../public/images/bannerEn9.jpg';
import bannerEn10 from '../../../public/images/bannerEn10.jpg';
import bannerEn11 from '../../../public/images/bannerEn11.jpg';
import bannerEn12 from '../../../public/images/bannerEn12.jpg';
import bannerEn13 from '../../../public/images/bannerEn13.jpg';
import bannerEn14 from '../../../public/images/bannerEn14.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { i18n } = useTranslation();
  const [activeBanner, setActiveBanner] = useState(1);
  const bannerEn = [
    bannerEn1,
    bannerEn2,
    bannerEn3,
    bannerEn4,
    bannerEn5,
    bannerEn6,
    bannerEn7,
    bannerBr8,
    bannerEn9,
    bannerEn10,
    bannerEn11,
    bannerEn12,
    bannerEn13,
    bannerEn14,
  ]
  const bannerBr = [
    bannerBr1,
    bannerBr2,
    bannerBr3,
    bannerBr4,
    bannerBr5,
    bannerBr6,
    bannerBr7,
    bannerBr8,
    bannerBr9,
    bannerBr8,
    bannerBr10,
    bannerBr11,
    bannerBr12,
    bannerBr13,
    bannerBr14,
  ]
  const verify = i18n.language === 'ptbr' ? bannerBr : bannerEn;
  return (
    <section className="home" id="home">
      <div className="divTeste" 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bannerBr[activeBanner]?.src})`,
          filter: 'blur(10px)',
          backgroundColor: '#cecece',
        }}
      />

      <div className="background-image">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          onActiveIndexChange={(i) => setActiveBanner(i.realIndex)}
          className="mySwiper"
        >
          {verify.map((row, key) => (
            <SwiperSlide key={key}><Image src={row} objectFit="cover" alt="banner1"/></SwiperSlide>
          ))}
          <SwiperSlide><Image src={bannerBr8} objectFit="cover" alt="banner3"/></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
