import { useRouter } from "next/router";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { BiRightArrowAlt } from "react-icons/bi";
import { GetStaticProps } from "next";
import { getBlogBr } from "../../lib/blogBr";
import { getBlogEn } from "../../lib/blogEn";

export default function Blogs({ blogBr, blogEn }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isBr = i18n.language === 'ptbr' ? blogBr : blogEn

  function handleOnClickProduct(id: any, title: string) {
    var convertTitle = new URLSearchParams(title).toString();
    var convertUnderline = convertTitle.replaceAll("+", "-");

    router.push({
      pathname: `/blogs/${convertUnderline}`,
      query: { id },
    })
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <div
              className="specialty__box"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <h2 className="section__titleSpecialty">
                {t('home_blog_titulo')}
              </h2>
            </div>
          </div>

          <div className="blog__content grid">
            {isBr.map((row: any) => (
              <article key={row.id} className="blog__card">
                <div className="blog__image">
                  <Image src={row.imagem} alt={'blogImage'} className="blog__img"  />

                  <button onClick={() => handleOnClickProduct(row.id, row.titulo)} className="blog__button">
                    <i className="bx bx-right-arrow-alt"><BiRightArrowAlt /></i>
                  </button>
                </div>

                <div className="blog__data">
                  <h2 className="blog__title">{t('home_blog_subtitulo')}</h2>
                  <p className="blog__description">
                    {t('home_blog_descricao')}
                  </p>
                </div>
            </article>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogBr = getBlogBr();
  const blogEn = getBlogEn();

  return {
    props: {
      blogBr,
      blogEn,
    }
  }
}