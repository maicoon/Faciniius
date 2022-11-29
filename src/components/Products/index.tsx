import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import item1 from '../../../public/images/item1.png';
import item1_1 from '../../../public/images/item1_1.png';
import item2 from '../../../public/images/item2.png';
import item2_1 from '../../../public/images/item2_1.png';
import item2_2 from '../../../public/images/item2_2.png';
import item3 from '../../../public/images/item3.png';
import item3_1 from '../../../public/images/item3_1.png';
import item4 from '../../../public/images/item4.png';
import item4_1 from '../../../public/images/item4_1.png';
import item5 from '../../../public/images/item5.png';
import item5_1 from '../../../public/images/item5_1.png';
import item6 from '../../../public/images/item6.png';
import item8 from '../../../public/images/item8.png';
import item8_1 from '../../../public/images/item8_1.png';
import item8_2 from '../../../public/images/item8_2.png';
import item9 from '../../../public/images/item9.png';
import item10 from '../../../public/images/item10.png';
import item11 from '../../../public/images/item11.png';
import item12 from '../../../public/images/item12.png';
import item13 from '../../../public/images/item13.png';
import item13_1 from '../../../public/images/item13_1.png';
import item14 from '../../../public/images/item14.png';
import item14_1 from '../../../public/images/item14_1.png';
import item15 from '../../../public/images/item15.png';
import item16 from '../../../public/images/item16.png';
import item17 from '../../../public/images/item17.png';
import item18 from '../../../public/images/item18.png';
import item19 from '../../../public/images/item19.png';
import item20 from '../../../public/images/item20.png';
import item21 from '../../../public/images/item21.png';
import item22 from '../../../public/images/item22.png';
import item23 from '../../../public/images/item23.png';
import item24 from '../../../public/images/item24.png';
import item25 from '../../../public/images/item25.png';
import item26 from '../../../public/images/item26.png';
import item27 from '../../../public/images/item27.png';
import item27_1 from '../../../public/images/item27_1.png';
import item28 from '../../../public/images/item28.png';
import item28_1 from '../../../public/images/item28_1.png';
import item29 from '../../../public/images/item29.png';
import item29_1 from '../../../public/images/item29_1.png';
import item30 from '../../../public/images/item30.png';
import item31 from '../../../public/images/item31.png';
import item32 from '../../../public/images/item32.png';
import item33 from '../../../public/images/item33.png';
import item34 from '../../../public/images/item34.png';
import item35 from '../../../public/images/item35.png';
import item35_1 from '../../../public/images/item35_1.png';
import item36 from '../../../public/images/item36.png';
import item36_1 from '../../../public/images/item36_1.png';
import item37 from '../../../public/images/item37.png';
import item37_1 from '../../../public/images/item37_1.png';
import item38 from '../../../public/images/item38.png';
import item38_1 from '../../../public/images/item38_1.png';
import item39 from '../../../public/images/item39.png';

import blog1 from "../../../public/images/blog_1.png";
import blog2 from "../../../public/images/blog_2.png";

import linha_profissional from '../../../public/images/linha_profissional.png';
import Linha_infinity from '../../../public/images/linha_infiniy.png';
import Linha_finalizadores from '../../../public/images/linha_finalizadores.png';
import Linha_homecare from '../../../public/images/linha_homecare.png';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { CardItem } from "../CardItem";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

export default function Products({ productEn, productBr }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  function handleOnClickProduct(id: any, title: string) {
    var convertTitle = new URLSearchParams(title).toString();
    var convertUnderline = convertTitle.replaceAll("+", "-");

    router.push({
      pathname: `/products/${convertUnderline}`,
      query: { id },
    });
  }

  return (
    <section className="products section" id="products">
      <h2 className="section__title">{t("home_produtos")}</h2>

      <div className="products__container container swiper">
        <div className="swiper-wrapper">
          <div className="divNone" style={{ display: "none", opacity: 0 }}>

          <Image
              src={blog1}
              alt="testeImage"
              className="products__img"
           
            />
                        <Image
              src={blog2}
              alt="testeImage"
              className="products__img"
           
            />
                        <Image
              src={linha_profissional}
              alt="testeImage"
              className="products__img"
           
            />
                        <Image
              src={Linha_infinity}
              alt="testeImage"
              className="products__img"
           
            />
                        <Image
              src={Linha_finalizadores}
              alt="testeImage"
              className="products__img"
           
            />
                        <Image
              src={Linha_homecare}
              alt="testeImage"
              className="products__img"
           
            />


            <Image
              src={item1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item2}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item1_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item2_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item2_2}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item3}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item3_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item4}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item4_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item5}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item5_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item6}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item8}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item8_1}
              alt="testeImage"
              className="products__img"
           
            />
                        <Image
              src={item8_2}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item9}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item10}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item11}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item12}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item13}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item13_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item14}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item14_1}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item15}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item16}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item17}
              alt="testeImage"
              className="products__img"
            />

            <Image
              src={item18}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item19}
              alt="testeImage"
              className="products__img"
           
            />
            <Image
              src={item20}
              alt="testeImage"
              className="products__img"
           
            />

            <Image
              src={item21}
              alt="testeImage"
              className="products__img"
            />

<Image
              src={item22}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item23}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item23}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item24}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item25}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item26}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item27}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item27_1}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item28}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item28_1}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item29}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item29}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item29_1}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item30}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item31}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item32}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item33}
              alt="testeImage"
              className="products__img"
            />
            <Image
              src={item34}
              alt="testeImage"
              className="products__img"
            />

<Image
              src={item35}
              alt="testeImage"
              className="products__img"
            />
                        <Image
              src={item35_1}
              alt="testeImage"
              className="products__img"
            />
                        <Image
              src={item36}
              alt="testeImage"
              className="products__img"
            />
                        <Image
              src={item36_1}
              alt="testeImage"
              className="products__img"
            />
                        <Image
              src={item37}
              alt="testeImage"
              className="products__img"
            />

<Image
              src={item37_1}
              alt="testeImage"
              className="products__img"
            />
                        <Image
              src={item38}
              alt="testeImage"
              className="products__img"
            />

<Image
              src={item38_1}
              alt="testeImage"
              className="products__img"
            />
                        <Image
              src={item39}
              alt="testeImage"
              className="products__img"
            />
          </div>

          <Swiper
            navigation={{
              nextEl: ".swiper-button-prev",
              prevEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
            breakpoints={{
              1024: {
                spaceBetween: 72,
                slidesPerView: 3,
              },
            }}
            className=".products__container"
            spaceBetween={32}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            onMouseEnter={() => console.log('HOVER ENTROU')}
            onMouseLeave={() => console.log('HOVER SAIOU')}
          >
            {i18n.language === "ptbr"
              ? productBr.map((row: any) => (
                  <SwiperSlide
                    key={row.id}
                    // onClick={() => handleOnClickProduct(row.id, row.title)}
                    className="products__card swiper-slide"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#f5f6f8",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <CardItem
                      handleOnClick={() => handleOnClickProduct(row.id, row.title)}
                      images={row.colecao}
                      title={row.title}
                      
                    />
                    {/* <Image
                      src={row.imagem}
                      alt={row.title}
                      className="products__img"
                    />

                    <h2
                      className="products__title"
                      style={{ textAlign: "center" }}
                    >
                      {row.title}
                    </h2> */}
                    {/* <span className="products__price">{row.subtitulo}</span> */}
                  </SwiperSlide>
                ))
              : productEn.map((row: any) => (
                  <SwiperSlide
                    key={row.id}
                    // onClick={() => handleOnClickProduct(row.id, row.title)}
                    className="products__card swiper-slide"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#f5f6f8",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >

                    <CardItem
                      handleOnClick={() => handleOnClickProduct(row.id, row.title)}
                      images={row.colecao}
                      title={row.title}
                    />

                    {/* <Image
                      src={row.imagem}
                      alt={row.title}
                      className="products__img"
                    />

                    <h2
                      className="products__title"
                      style={{ textAlign: "center" }}
                    >
                      {row.title}
                    </h2> */}
                    {/* <span className="products__price">{row.subtitulo}</span> */}
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>

        <div className="divTeste" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', width: '100%' }}>
          <div className="swiper-button-next" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <i className="ri-arrow-right-line" style={{ cursor: 'pointer' }}><BiLeftArrowAlt /></i>
          </div>

          <div className="swiper-button-prev" style={{ display: 'inline', alignItems: 'center', justifyContent: 'center'}}>
            <i className="ri-arrow-left-line" style={{ cursor: 'pointer' }}><BiRightArrowAlt /></i>
          </div>

        </div>
      </div>

    </section>
  );
}
