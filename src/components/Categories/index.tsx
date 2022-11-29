import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next'
import { RiArrowRightLine } from "react-icons/ri";
import Accordion from "../Accordion";

export default function Categories({ lineBr, lineEn }) {
  const { t, i18n } = useTranslation();

  const isBr = i18n.language === 'ptbr' ? lineBr : lineEn

  return (
    <section className="new section" id="new">
      <h2 className="section__title">{t('home_linhas_produtos_title')}</h2>

      <div className="new__container container grid">

          {/* {isBr.map((row: any) => (
            <article key={row.id} className="new__card">
              <Image src={row.imagem} className="new__img" alt="teste" />

                <Link href="/lista-produtos" className="new__link">
                  <a className="new__link">
                    <div className="new__data">
                      <h2 className="new__title">{row.title}</h2>
                      <span className="new__subtitle">{row.title}</span>
                    </div>

                    <i className="ri-arrow-right-line"><RiArrowRightLine /></i>
                  </a>
                </Link>
            </article>  
          ))} */}
      <Accordion />
      </div>
    </section>
  );
}
