import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FacinniusImg from "../../../public/images/infinity.png";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <h2 dangerouslySetInnerHTML={{ __html: t('sobre_titulo') }} className="section__title"/>

            <div className="quality__content grid">
              <div className="quality__images">
                <Image
                  src={FacinniusImg}
                  alt="facinnius image"
                  className="quality__img-big"
                />
              </div>

              <div className="quality__data">
                <h1 className="quality__titleFaccinnius">
                  {t('sobre_descrição1')}
                </h1>
                <h1 className="quality__titleFaccinnius" style={{ marginTop: '2rem' }}>
                  {t('sobre_descrição2')}
                </h1>
                {/* <h2 className="quality__price">{filterProductsId.title}</h2> */}
                {/* <span className="quality__special">Especial Price</span> */}
                <p className="quality__titleFaccinnius" style={{ marginTop: '2rem' }}>
                  {t('sobre_descrição3')}
                </p>
                <p className="quality__titleFaccinnius" style={{ marginTop: '2rem' }}>
                  {t('sobre_descrição4')}
                </p>

                {/* <div className="quality__buttons">
                  <button className="button">Buy Now</button>

                  <a href="#" className="quality__button">
                    See more
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
