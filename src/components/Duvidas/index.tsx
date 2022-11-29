import { useTranslation } from 'react-i18next'
import Accordion from "../Accordion";

export default function Duvidas({ questionBr, questionEn }) {
  const { t, i18n } = useTranslation();

  
  const verify = i18n.language === 'ptbr' ? questionBr : questionEn;
  console.log('verify', verify)

  return (
    <section className="new section container" id="new">
      <h2 className="section__title" style={{ marginBottom: '14px' }}>{t('duvidas_titulo')}</h2>
      <span className="new__sub">{t('duvidas_subtitulo')}</span>
      {/* <div className="new__container container grid"> */}
        <Accordion question={verify}  />
      {/* </div> */}
    </section>
  );
}
