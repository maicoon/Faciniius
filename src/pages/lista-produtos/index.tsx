import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiFilter } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";
import { CardItem } from "../../components/CardItem";
import Filtered from "../../components/Filtered";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

//DATA
import { getProdutcBr } from "../../lib/produtosBr";
import { getProdutcEn } from "../../lib/produtosEn";

export default function ProductsList({ productBr, productEn }) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const isBr = i18n.language === "ptbr" ? productBr : productEn;
  const filterItems = isBr.filter(
    (obj: any) =>
      obj.filtros.includes(formData.sexo) ||
      obj.filtros.includes(formData.cabelo) ||
      obj.filtros.includes(formData.linha) ||
      obj.filtros.includes(formData.tipoCabelo) ||
      obj.filtros.includes(formData.desejoCabelo) ||
      obj.filtros.includes(formData.comprimento) ||
      obj.filtros.includes(formData.aspecto)
  );
  let verifiFilter = filterItems.length <= 0 ? isBr : filterItems;

  const [data, setData] = useState([]);

  function handleOnClickProduct(id: any, title: string) {
    var convertTitle = new URLSearchParams(title).toString();
    var convertUnderline = convertTitle.replaceAll("+", "-");

    router.push({
      pathname: `/products/${convertUnderline}`,
      query: { id },
    });
  }

  useEffect(() => {
    setData([...verifiFilter]);
  }, [verifiFilter]);

  useEffect(() => {
    getFilterItems();
  }, [formData]);

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  const getFilterItems = async () => {
    var newFilter = formData as any;
    var size = 0;
    for (var key in newFilter) {
      if (newFilter[key]) {
        size++;
      } else {
        delete newFilter[key];
      }
    }

    if (size > 0) {
      var queryString = new URLSearchParams(newFilter).toString();
      queryString += ``;
      router.push({
        query: queryString,
      });
    }
  };

  const [filterLines, setFilterLines] = useState(["Profissional", "HomeCare"]);

  function handleOnChangeFilterLine(value) {
    const existing = value.filter(
      (objValue) =>
        filterLines.filter((objFilterLines) => objValue === objFilterLines)
          .length > 0
    );

    if (existing.length === 0) {
      const newLine = filterLines;

      value.map((valueRow) => {
        newLine.push(valueRow);
      });
      setFilterLines([...newLine]);
    } else {
      if (value.length === 2) {
        setFilterLines([]);
      } else {
        setFilterLines(
          filterLines.filter(
            (objFilterLines) =>
              value.filter((objValue) => objValue !== objFilterLines)[0]
          )
        );
      }
    }
  }

  useEffect(() => {
    let filterFilters = filterLines;
    const newData = [];
    filterFilters.map((filter) => {
      if (
        verifiFilter.filter(
          (obj) => obj.filtros.filter((filtro) => filtro === filter).length > 0
        )
      ) {
        verifiFilter
          .filter(
            (obj) =>
              obj.filtros.filter((filtro) => filtro === filter).length > 0
          )
          .map((row) => {
            newData.push(row);
          });
      }
    });
    setData([...newData]);
  }, [filterLines]);

  return (
    <>
      <Header />
      <Filtered
        isOpen={modal}
        handleCloseModal={() => setModal(false)}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        formValue={formData}
      />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="quality__container container">
            <div
              className="specialty__box"
              style={{ gridTemplateColumns: "1fr" }}
            >
              <h2 className="section__titleSpecialty">
                {t("produtos_titulo")}
              </h2>

              <div className="listItems-group">
                <h3>{t("produtos_subtitulo")}</h3>
                <div className="filterItems">
                  <div className="filterItemsForLines">
                    <label
                      className={
                        filterLines.filter((obj) => obj === "Profissional")
                          .length > 0
                          ? "active"
                          : "normal"
                      }
                      onClick={() => handleOnChangeFilterLine(["Profissional"])}
                    >
                      <span>Profissional</span>
                    </label>
                    <label
                      className={
                        filterLines.filter((obj) => obj === "HomeCare").length >
                        0
                          ? "active"
                          : "normal"
                      }
                      onClick={() => handleOnChangeFilterLine(["HomeCare"])}
                    >
                      <span>Home Care</span>
                    </label>
                    <label
                      onClick={() =>
                        handleOnChangeFilterLine(["Profissional", "HomeCare"])
                      }
                      className={
                        filterLines.filter((obj) => obj === "Profissional")
                          .length > 0 &&
                        filterLines.filter((obj) => obj === "HomeCare").length >
                          0
                          ? "active"
                          : "normal"
                      }
                    >
                      <span>Todos</span>
                    </label>
                  </div>

                  {/* <button
                    style={{
                      cursor: "pointer",
                      gap: "12px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="buttonDefault"
                    onClick={() => setModal(!modal)}
                  >
                    <BiFilter size={18} />
                    {t("produtos_botao_filtro")}
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="new__container container grid"
            style={{ marginTop: "4rem" }}
          >
            {data.map((row) => (
              // <article className="new__card" key={row.id}>
              //   <Image src={row.imagem} className="new__img" alt={row.title} />

              //   <button
              //     onClick={() => handleOnClickProduct(row.id, row.title)}
              //     className="new__link"
              //     style={{ width: '100%' }}
              //   >
              //     <div className="new__data">
              //       <h2 className="new__title">{row.title}</h2>
              //       {/* <span className="new__subtitle">{row.title}</span> */}
              //     </div>

              //     <i className="ri-arrow-right-line">
              //       <RiArrowRightLine />
              //     </i>
              //   </button>
              // </article>

              <CardItem
                handleOnClick={() => handleOnClickProduct(row.id, row.title)}
                images={row.colecao}
                title={row.title}
                isBorder
              />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const productBr = getProdutcBr();
  const productEn = getProdutcEn();

  return {
    props: {
      productBr: productBr,
      productEn: productEn,
    },
  };
};
