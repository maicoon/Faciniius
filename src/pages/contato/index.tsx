import React, { ChangeEvent, FormEvent, useState } from "react";
import api from "../../services/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const router = useRouter();
  const { t } = useTranslation();
  const [typeForm, setTypeForm] = useState('contato')
  const [formData, setFormData] = useState<any>({})

  function handleOnSelectForm(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      regiao: '',
      cabeleireiro: '',
      mensagem: '',
      endereco: '',
      numero: '',
      cidade: '',
      opiniao: ''
    })
    setTypeForm(event.target.value)
  }

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubimit(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post(`send-email/${typeForm}`, formData);
      console.log('response', response.data)
      toast.success('Dados enviado com sucesso!')

      router.push('/');
    } catch(error: any) {
      toast.error(error.response.data.result)
    }

  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="titulo-bg">
            <div className="titulo container">
              <p className="font-2-l-b cor-5">{t('contato_titulo')}</p>
              <h1 dangerouslySetInnerHTML={{ __html: t('contato_subtitulo') }} className="font-1-xxl cor-0" />
            </div>
          </div>

          <div className="orcamento container">
            <div className="orcamento-produto">
              <div className="orcamento-conteudo" id="orcamento-bikcraft">
                <h2 className="font-1-xs cor-5">{t('contato_tipo_contato')}</h2>

                <input type="radio" name="contato" value="contato" id="contato" checked={typeForm === 'contato'} onChange={(e) => handleOnSelectForm(e)} />
                <label htmlFor="contato">{t('contato_tipo_input1')}</label>

                <input type="radio" name="distribuidor" value="distribuidor" checked={typeForm === 'distribuidor'} id="distribuidor" onChange={(e) => handleOnSelectForm(e)}/>
                <label htmlFor="distribuidor">{t('contato_tipo_input2')}</label>

                <input type="radio" name="opiniao" value="opiniao" id="opiniao" checked={typeForm === 'opiniao'} onChange={(e) => handleOnSelectForm(e)}/>
                <label htmlFor="opiniao">{t('contato_tipo_input3')}</label>
              </div>
            </div>

            <form onSubmit={handleSubimit}>
              <div className="orcamento-dados form">
                <h2 className="font-1-xs cor-9 col-2">{t('contato_form_titulo')}</h2>
                <div className="col-2">
                  <label htmlFor="nome">{t('contato_form_nome')}</label>
                  <input value={formData.nome} type="text" id="nome" name="nome" onChange={handleInputChange}/>
                </div>

                <div>
                  <label htmlFor="telefone">{t('contato_form_telefone')}</label>
                  <input value={formData.telefone} type="text" id="telefone" name="telefone" onChange={handleInputChange}/>
                </div>

                <div>
                  <label htmlFor="email">{t('contato_form_email')}</label>
                  <input value={formData.email} type="email" id="email" name="email" onChange={handleInputChange}/>
                </div>

                {typeForm === 'contato' && (
                  <>
                    <div>
                      <label htmlFor="regiao">{t('contato_form_regiao')}</label>
                      <input value={formData.regiao} type="text" id="regiao" name="regiao" onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label htmlFor="cabeleireiro">{t('contato_form_cabeleireiro')}</label>
                      <select value={formData.cabeleireiro} id="cabeleireiro" name="cabeleireiro" onChange={handleSelectChange}>
                        <option value="0">{t('filtro_questao3_option0')}</option>
                        <option value="sim">{t('contato_form_cabeleireiro_option1')}</option>
                        <option value="nao">{t('contato_form_cabeleireiro_option2')}</option>
                      </select>
                    </div>
                  </>
                )}

                {typeForm === 'opiniao' && (
                  <>
                    <div className="col-2">
                      <label htmlFor="categoria">{t('contato_form_categoria')}</label>
                      <select value={formData.categoria} id="categoria" name="categoria" onChange={handleSelectChange}>
                        <option value="0">{t('filtro_questao3_option0')}</option>
                        <option value="site">{t('contato_form_categoria_option1')}</option>
                        <option value="produtos">{t('contato_form_categoria_option2')}</option>
                        <option value="produtos">{t('contato_form_categoria_option3')}</option>
                        <option value="elogios">{t('contato_form_categoria_option4')}</option>
                        <option value="duvidas">{t('contato_form_categoria_option5')}</option>
                        <option value="sugestoes">{t('contato_form_categoria_option6')}</option>
                      </select>
                    </div>
                  </>
                )}
                
                {typeForm === 'distribuidor' && (
                  <>
                    <div className="col-2">
                      <label htmlFor="endereco">{t('contato_form_endereco')}</label>
                      <input value={formData.endereco} type="text" id="endereco" name="endereco" onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label htmlFor="numero">{t('contato_form_numero')}</label>
                      <input value={formData.numero} type="text" id="numero" name="numero" onChange={handleInputChange}/>
                    </div>

                    <div>
                      <label htmlFor="cidade">{t('contato_form_cidade')}</label>
                      <input value={formData.cidade} type="text" id="cidade" name="cidade" onChange={handleInputChange}/>
                    </div>
                  </>
                )}

                {typeForm !== 'distribuidor' && (
                  <div className="col-2">
                    <label htmlFor={typeForm === 'opiniao' ? 'opiniao' : 'mensagem'}>{typeForm === 'opiniao' ? t('contato_form_cidade') : t('contato_form_opinião')}</label>
                    <textarea value={typeForm === 'opiniao' ? formData.opiniao : formData.mensagem} name={typeForm === 'opiniao' ? 'opiniao' : 'mensagem'} id={typeForm === 'opiniao' ? 'opiniao' : 'mensagem'} onChange={handleTextareaChange}/>
                  </div>
                )}

                <button className="botao col-2">{t('contato_form_enviar')}</button>
              </div>
            </form>
          </div>

        </section>
        <Footer />
      </main>
    </>
  );
}
