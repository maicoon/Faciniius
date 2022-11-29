import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import Speciality1 from "../../../public/images/speciality1.png";
import Speciality2 from "../../../public/images/speciality2.png";
import Speciality3 from "../../../public/images/speciality3.png";

export default function Speciality() {
  const { t } = useTranslation();

  
  return (
    <div className="specialty section container headline" id="specialty">
      <div className="specialty__container">
        <div className="specialty__box">
          <h2 className="section__titleSpecialty">
            {t('home_especialidades_text')}
          </h2>

          <div>
            <Link href="/lista-produtos" className="buttonDefault specialty__button">
              <a className="buttonDefault specialty__button">
                {t('home_especialidades_button')}
              </a>
            </Link>
          </div>
        </div>

        <div className="specialty__category">
          <div className="specialty__group specialty__line">
            <Image
              src={Speciality1}
              alt="Speciality1"
              className="specialty__img"
            />

            <h3 className="specialty__title">{t('home_especialidades_item1_title')}</h3>
            <p className="specialty__description">
              {t('home_especialidades_item1_descricao')}
            </p>
          </div>

          <div className="specialty__group specialty__line">
            <Image
              src={Speciality2}
              alt="Speciality2"
              className="specialty__img"
            />

            <h3 className="specialty__title">{t('home_especialidades_item2_title')}</h3>
            <p className="specialty__description" dangerouslySetInnerHTML={{ __html: t('home_especialidades_item2_descricao') }}/>
          </div>

          <div className="specialty__group">
            <Image
              src={Speciality3}
              alt="Speciality3"
              className="specialty__img"
            />

            <h3 className="specialty__title">{t('home_especialidades_item3_title')}</h3>
            <p className="specialty__description">
              {t('home_especialidades_item3_descricao')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}