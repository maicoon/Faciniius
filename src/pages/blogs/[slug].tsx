import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
import { getBlogBr } from "../../lib/blogBr";
import { getBlogEn } from "../../lib/blogEn";

export default function BlogId({ blogBr, blogEn }) {
  const router = useRouter();
  const { i18n } = useTranslation();

  const isBr = i18n.language === 'ptbr' ? blogBr : blogEn
  const filter = isBr.filter((obj: any) => String(obj.id) === router.query.id)[0]

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
                {filter.titulo}
              </h2>
            </div>
          </div>

          <div className="lojas container" style={{ paddingBottom: '0' }}>
            <h2 className="font-1-xxl">
              <span className="cor-p1">{filter.data}</span>
            </h2>
          </div>
          <div className="container textoBlog">
            <h3 style={{ lineHeight: '32px', color: 'hsl(220, 4%, 32%)' }} dangerouslySetInnerHTML={{ __html: filter.texto }} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const blogBr = getBlogBr();
  const blogEn = getBlogEn();

  return {
    props: {
      blogBr: blogBr,
      blogEn: blogEn,
    }
  }
}