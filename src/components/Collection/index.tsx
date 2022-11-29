import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiArrowRightLine } from "react-icons/ri";

import Collection1 from '../../../public/images/hairdresser.png';
import Collection2 from '../../../public/images/beautiful.png';
import { useTranslation } from "react-i18next";

export default function Collection() {
  const { t } = useTranslation();
  const router = useRouter()

  function handleOnClickProduct(typo: any) {
    router.push({
      pathname: `/lista-produtos/`,
      query: { linha: typo },
    })
  }
  return (
    <section className="collection section" id="collection">
      <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
          <h2 className="collection__title" dangerouslySetInnerHTML={{ __html: t('home_colecao_masculino') }} />
            <button onClick={() => handleOnClickProduct('profissional')} className="button__link">
            {t('home_colecao_botao')} <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </button>
          </div>

          <Image src={Collection1} alt="collection image" onClick={() => handleOnClickProduct('profissional')} style={{ cursor: 'pointer'}}/>
        </div>

        <div className="collection__explore" >
          <Image src={Collection2} alt="collection image" onClick={() => handleOnClickProduct('homecare')} style={{ cursor: 'pointer' }} />

          <div className="collection__data-women">
            <h2 className="collection__title" dangerouslySetInnerHTML={{ __html: t('home_colecao_feminino') }} />
            <button onClick={() => handleOnClickProduct('homecare')} className="button__link">
            {t('home_colecao_botao')} <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
