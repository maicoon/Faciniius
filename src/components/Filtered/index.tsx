import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BiXCircle } from "react-icons/bi";

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
  handleInputChange: (event: any) => void;
  handleSelectChange: (event: any) => void;
  formValue: any;
}

export default function Filtered({ isOpen, handleInputChange, formValue, handleSelectChange, handleCloseModal }: Props) {
  const router = useRouter();
  const { t } = useTranslation();
  const { sexo, cabelo, linha, tipoCabelo, comprimento, aspecto } = router.query

  return (
    <div className={`cart ${isOpen && "show-cart"}`} id="cart">
      <i
        className="bx bx-x cart__close"
        id="cart-close"
        onClick={handleCloseModal}
      >
        <BiXCircle />
      </i>

      <h2 className="cart__title-center">{t('filtro_titulo')}</h2>

      <div className="cart__container">
        <div className="orcamento_filter">

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
            {t('filtro_questao0_titulo')}
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input 
                type="radio" 
                name="linha" 
                value="profissional" 
                id="profissional" 
                checked={linha === 'profissional'} 
                onChange={handleInputChange}
              />
              <label htmlFor="profissional">{t('filtro_questao0_option1')}</label>

              <input
                type="radio"
                name="linha"
                value="homecare"
                checked={linha === 'homecare'}
                id="homecare"
                onChange={handleInputChange}
              />
              <label htmlFor="homecare">{t('filtro_questao0_option2')}</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
            {t('filtro_questao1_titulo')}
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="sexo" value="feminino" id="feminino" checked={sexo === 'feminino'} onChange={handleInputChange}/>
              <label htmlFor="feminino">{t('filtro_questao1_option1')}</label>

              <input
                type="radio"
                name="sexo"
                value="masculino"
                checked={sexo === 'masculino'}
                id="masculino"
                onChange={handleInputChange}
              />
              <label htmlFor="masculino">{t('filtro_questao1_option2')}</label>
            </div>
          </div>

          <div className="orcamento-dados_filter form">
            <h2 className="font-1-xs cor-5">{t('filtro_questao2_titulo')}</h2>
            <div className="col-2">
              <label htmlFor="cabelo">{t('filtro_questao2_option1_placeholder')}</label>
              <select id="cabelo" name="cabelo" value={cabelo} onChange={handleSelectChange}>
                <option value="0">{t('filtro_questao2_option0')}</option>
                <option value="liso">{t('filtro_questao2_option1')}</option>
                <option value="ondulado">{t('filtro_questao2_option2')}</option>
                <option value="cacheado">{t('filtro_questao2_option3')}</option>
                <option value="crespo">{t('filtro_questao2_option4')}</option>
              </select>
            </div>

            <div className="col-2">
              <label htmlFor="tipoCabelo">{t('filtro_questao3_option1_placeholder')}</label>
              <select id="tipoCabelo" name="tipoCabelo" value={tipoCabelo} onChange={handleSelectChange}>
                <option value="0">{t('filtro_questao3_option0')}</option>
                <option value="natural">{t('filtro_questao3_option1')}</option>
                <option value="comMechas">{t('filtro_questao3_option2')}</option>
                <option value="comAlisamento">{t('filtro_questao3_option3')}</option>
                <option value="comColoração">{t('filtro_questao3_option4')}</option>
              </select>
            </div>

            {/* <div className="col-2">
              <label htmlFor="desejoCabelo">Desejo para o meu cabelo</label>
              <select id="desejoCabelo" name="desejoCabelo" onChange={handleSelectChange}>
                <option value="0">Selecione uma opção</option>
                <option value="natural">Natural</option>
                <option value="mechas">Com mechas</option>
                <option value="alisamento">Com alisamento</option>
                <option value="coloração">Com coloração</option>
              </select>
            </div> */}
            
          </div>
          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
            {t('filtro_questao4_titulo')}
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="comprimento" value="longo" checked={comprimento === 'longo'} id="longo" onChange={handleInputChange}/>
              <label htmlFor="longo">{t('filtro_questao4_option1')}</label>

              <input type="radio" name="comprimento" value="medio" checked={comprimento === 'medio'} id="medio" onChange={handleInputChange}/>
              <label htmlFor="medio">{t('filtro_questao4_option2')}</label>

              <input type="radio" name="comprimento" value="curto" checked={comprimento === 'curto'} id="curto" onChange={handleInputChange}/>
              <label htmlFor="curto">{t('filtro_questao4_option3')}</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              {t('filtro_questao5_titulo')}
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="aspecto" value="oleoso" checked={aspecto === 'curto'} id="oleoso" onChange={handleInputChange}/>
              <label htmlFor="oleoso">{t('filtro_questao5_option1')}</label>

              <input type="radio" name="aspecto" value="seco" checked={aspecto === 'seco'} id="seco" onChange={handleInputChange}/>
              <label htmlFor="seco">{t('filtro_questao5_option2')}</label>

              <input type="radio" name="aspecto" value="misto" checked={aspecto === 'misto'} id="misto" onChange={handleInputChange}/>
              <label htmlFor="misto">{t('filtro_questao5_option3')}</label>
            </div>
          </div>

          {/* <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Com que frequencia lava o cabelo?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="frequencia" value="uma" id="uma" onChange={handleInputChange}/>
              <label htmlFor="uma">Uma semana</label>

              <input type="radio" name="frequencia" value="duas" id="duas" onChange={handleInputChange}/>
              <label htmlFor="duas">Duas vezes semana</label>

              <input type="radio" name="frequencia" value="todos" id="todos" onChange={handleInputChange}/>
              <label htmlFor="todos">Todos os dias</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Usa produtos térmicos?
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="termicos" value="sim" id="sim" onChange={handleInputChange}/>
              <label htmlFor="sim">Sim</label>

              <input type="radio" name="termicos" value="nao" id="nao" onChange={handleInputChange}/>
              <label htmlFor="nao">Não</label>

              <input type="radio" name="termicos" value="asvezes" id="asvezes" onChange={handleInputChange}/>
              <label htmlFor="asvezes">Ás vezes</label>
            </div>
          </div>

          <div className="orcamento-produto_filter">
            <h2 className="font-1-xs cor-5" style={{ marginBottom: "12px" }}>
              Usa ferramentas de calor? Ex(secador, chapinhas...)
            </h2>
            <div
              className="orcamento-conteudo_filter field-group_filter"
              id="orcamento-bikcraft_filter"
            >
              <input type="radio" name="ferramentas" value="sim" id="ferramentasSim" onChange={handleInputChange}/>
              <label htmlFor="ferramentasSim">Sim</label>

              <input type="radio" name="ferramentas" value="nao" id="ferramentasNao" onChange={handleInputChange}/>
              <label htmlFor="ferramentasNao">Não</label>

            </div>
          </div> */}
      
        </div>
      </div>

      {/* <div className="cart__prices">
        <span className="cart__prices-item">3 items</span>
        <span className="cart__prices-total">$2880</span>
      </div> */}
    </div>
  );
}
