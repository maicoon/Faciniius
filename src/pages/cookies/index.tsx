import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";

export default function Cookies() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="main">
        <section className="quality section" id="premium">
          <div className="titulo-bg">
            <div className="titulo container">
              <p className="font-2-l-b cor-5">{t('privacidade_subtitulo')}</p>
              <h1 className="font-1-xxl cor-0">
              {t('cookies_titulo')}<span className="cor-p1">.</span>
              </h1>
            </div>
          </div>

          <div className="politica container">
            {/* <div style={{ marginBottom: '2rem' }} className="politica__sectionTitle">
              <h2 className="politica__title">Esta Política de Privacidade tem como objetivo informar você (doravante “Usuário”), que acessa a página da Facinnius na Internet, quais informações são coletadas, como elas são tratadas, bem como as formas de compartilhamento e de exclusão desses dados. </h2>
              <h2 className="politica__title">A presente Política de Privacidade é aplicável ao presente site da Facinnius Empresa Ltda. <br /> Com a aceitação desta Política de Privacidade pelo Usuário, este concorda e permite o acesso as suas informações a partir do seu primeiro acesso ao site. Caso reste alguma dúvida, após a leitura desta Política de Privacidade, entre em contato conosco, entre em contato.</h2>
            </div> */}

            <div dangerouslySetInnerHTML={{__html: `
								<div id="wa-row-kv6vqcap2xih54" class="row row-align  ">
								<div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
									<div id="wa-comptext-padwrapper-kv6vqcap7ozed4" class="wa-comptext-padwrapper ">
										<div id="wa-comptext-kv6vqcap7ozed4" class="wa-comptext wafxWow fadeIn clearfix">
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>1.1</strong> Tecnologias como cookies, pixel tags, identificadores de dispositivo ou outros e armazenamento local ("Cookies e tecnologias semelhantes") são usadas durante a sua navegação no site para transmitir, proteger e entender Serviços e anúncios, dentro e fora dos Serviços.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>1.1.1</strong> Cookies são pequenos arquivos armazenados no navegador do Usuário, celular ou outro dispositivo. Pixel tags (também conhecidos como GIFs limpos, web beacons ou pixels) são pequenos blocos de código em uma página da web que permitem que elas realizem ações como ler e armazenar cookies e transmitir informações para os parceiros. A conexão resultante pode incluir informações como o endereço de IP de um dispositivo, a hora em que uma pessoa visualizou o pixel, um identificador associado ao navegador ou dispositivo e o tipo de navegador em uso.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>1.1.2</strong> Armazenamento local é uma tecnologia padrão da indústria que permite que um site ou aplicativo armazene e recupere dados do computador, celular ou outro dispositivo de uma pessoa. Alguns exemplos incluem dispositivos ou armazenamento local HTML5 e caching.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>1.2</strong> Essas tecnologias poderão ser usadas, entre outros, para permitir que nos e nossos parceiros apresentem os conteúdos e ofertas mais relevantes para você, aprimorar os Serviços e ajudar a manter estes Serviços seguros.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>1.3</strong> Os nomes específicos dos Cookies e tecnologias semelhantes usados podem variar na medida em que os Serviços são melhorados e atualizados, mas eles geralmente se restringem às categorias de uso abaixo:</span></p>
										</div>
									</div>
								</div>
							</div>
							<div class="wa-container-vspacer col-xl-12"></div>
							<div id="wa-row-kv6wfmag3er1lc" class="row row-align  ">
								<div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
									<div id="wa-comptext-padwrapper-kv6wfmahaq0c7s" class="wa-comptext-padwrapper ">
										<div id="wa-comptext-kv6wfmahaq0c7s" class="wa-comptext wafxWow fadeIn clearfix">
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>Autenticação:</strong> Responsável por auxiliar a manter a segurança dos Serviços, oferecendo suporte ou ativando recursos de segurança e ajudando a detectar atividades que violam os Termos de Uso.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>Segurança e integridade do site</strong>: Responsável por indicar que você está conectado(a), para que seja possível oferecer a você os recursos apropriados, bem como para entender como você usa os Serviços do nosso site.</span></p>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><br /><strong>Anúncios, ideias e medição</strong>: </span><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;">Responsável por analisar comportamento de navegação e veicular anúncios, torná-los mais relevantes para você e analisar Serviços e o seu uso. Por exemplo, é possível utilizar um cookie para descobrir se alguém a quem um anúncio tenha sido veiculado faz uma compra no site do anunciante ou instala o aplicativo anunciado posteriormente. Da mesma forma, parceiros podem usar cookies ou outras tecnologias semelhantes para determinar se nosso site exibiu um de seus anúncios e qual foi o seu desempenho, ou informar como você interage com ele.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>Recursos e serviços do site</strong>: Responsável por ajudar a fornecer produtos e serviços, por exemplo, quando você viu ou interagiu com conteúdo dos Serviços, e fornecer a ele outros plug-ins sociais, outras experiências e conteúdos personalizados ou fazer sugestões.</span></p>
											<p> </p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>Desempenho</strong>: Responsável por proporcionar a melhor experiência possível, por exemplo, ajudando a rotear o tráfego entre servidores e perceber com que velocidade os Serviços do nosso site são carregados para diferentes pessoas. Ocasionalmente, poderão ser armazenadas informações no seu navegador ou dispositivo para que os recursos em uso carreguem e respondam rapidamente.</span></p>
											<br>
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><br /><strong>Análises e pesquisas</strong>: O objetivo é entender, aprimorar e pesquisar Serviços, incluindo quando você acessa o nosso site ou outros sites e aplicativos a partir do computador ou dispositivo móvel. Por exemplo, é possível utilizar Cookies ou tecnologias semelhantes (incluindo informações do seu dispositivo) para entender como você está usando plug-ins sociais e melhorá-los, podendo ser compartilhadas informações sobre essa análise com os parceiros da da nossa empresa.</span></p>
										</div>
									</div>
								</div>
							</div>
							<div class="wa-container-vspacer col-xl-12"></div>
							<div id="wa-row-kv6wfmuv3er3so" class="row row-align  ">
								<div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
									<div id="wa-comptext-padwrapper-kv6wfmuvaq0hso" class="wa-comptext-padwrapper ">
										<div id="wa-comptext-kv6wfmuvaq0hso" class="wa-comptext wafxWow fadeIn clearfix">
											<p><span style="font-family: Montserrat, Arial, Helvetica, 'Liberation Sans', FreeSans, sans-serif;"><strong>1.4</strong> É possível que você gerencie preferências de Cookies e outras tecnologias semelhantes a partir da configuração de seu navegador, recusando ou excluindo alguns deles. No entanto, essa opção poderá comprometer os Serviços do nosso site ou impedir o funcionamento de determinadas funcionalidades que integram os Serviços.</span></p>
										</div>
									</div>
								</div>
							</div>
						`}}/>
          </div>

        </section>
        <Footer />
      </main>
    </>
  );
}
