import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../../common/Footer'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../common/Modal'
import classnames from 'classname'
import styles from './styles.module.css'
import Noticias from '../../common/Noticias'
import { windowScrollTo } from '../../utils/scroll-to-section.util'


function Institucional() {
  const [isModalNoticiasOpen, setIsModalNoticiasOpen] = useState(false)

  const [isModalSaibaMaisOpen, setIsModalSaibaMaisOpen] = useState(false)

  const { hash } = useLocation()

  useEffect(() => {
    let position;
    switch(hash) {
      case '#projeto': position = 1700; break;
      case '#asLeis': position = 2600; break;
      case '#tiposViolencias': position = 3700; break;
      case '#nossosServicos': position = 6400; break;
      case '#contatos': position = 9999; break;
      default: position = 0;
    }
    windowScrollTo(position)
  }, [hash])

  return (
    <>
      <div className={styles.container2}>
        <div className={styles.primeiroConteudo}>
          <p className={styles.txt1}>SEJA BEM VINDA AO PROJETO MULHER SEGURA</p>
          <p className={styles.txt2}>A vida recomeça quando a violência termina!</p>
          <p className={styles.txt3}>Para realizar uma denúncia de forma rápida e efetiva, clique no botão abaixo:</p>

          <button className={styles.btn1}><Link to="/urgencia" className={styles.btnDenuncia}>QUERO FAZER UMA DENÚNCIA</Link></button>
          <button className={classnames(styles.btn2, styles.saibaMais)} onClick={() => setIsModalSaibaMaisOpen(true)}>Saiba mais</button>

          <p className={styles.txt4}>* Garantimos que a denúncia será realizada de forma anonima com total sigilo dos dados informados</p>

        </div>
        <div className={styles.none}>
          <div className={styles.retImg}>
            <div className={styles.imgConteudo} style={{ backgroundImage: "url(img/MS5.png)" }}>
            </div>
          </div>
        </div>


        <div className={styles.conteudo2}>
          <div className={styles.divisoriaRoxa}>
            <div className={styles.containerNoticias}>
              <div className={styles.rowNoticias}>
                <div className={styles.not1}>
                  <p>A cada minuto, 25 brasileiras sofrem violência doméstica</p>
                  <a className={styles.sm} href="https://piaui.folha.uol.com.br/cada-minuto-25-brasileiras-sofrem-violencia-domestica/" target="_blank">SAIBA MAIS</a>
                </div>
                <div className={styles.not2}>
                  <p>Violência contra mulheres cresce em 20% das cidades durante a pandemia</p>
                  <a className={styles.sm} href="https://agenciabrasil.ebc.com.br/saude/noticia/2021-08/violencia-contra-mulheres-cresce-em-20-das-cidades-durante-pandemia" target="_blank">SAIBA MAIS</a>
                </div>
                <div className={styles.not3}>
                  <p>Uma em cada quatro mulheres foi vítima de algum tipo de violência na pandemia no Brasil</p>
                  <a className={styles.sm} href="https://g1.globo.com/sp/sao-paulo/noticia/2021/06/07/1-em-cada-4-mulheres-foi-vitima-de-algum-tipo-de-violencia-na-pandemia-no-brasil-diz-datafolha.ghtml" target="_blank">SAIBA MAIS</a>
                </div>
                <div className={styles.not4}>
                  <p>Vítima de violência doméstica relata falta de apoio ao buscar ajuda em delegacia </p>
                  <a className={styles.sm} href="https://g1.globo.com/ro/rondonia/noticia/2021/08/25/vitima-de-violencia-domestica-relata-falta-de-apoio-ao-buscar-ajuda-em-delegacia-para-denunciar-agressao-em-ro.ghtml" target="_blank">SAIBA MAIS</a>
                </div>
              </div>
              <div className={styles.btnNoticias}>
                <button onClick={() => setIsModalNoticiasOpen(true)} className={classnames(styles.btn2, styles.saibaMais)}>Mais notícias</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.conteudo3} id="projeto">
        <div className={styles.imgConteudo3} style={{ backgroundImage: "url(img/MS2.png)" }}>
          <div className={styles.containerConteudo3}>
            <div className={styles.rowCtd3}>
              <div className={styles.txtCtd3}>
                <div className={styles.divisoriaConteudo3}>

                </div>
                <div className={styles.txt1Ctd3}>
                  O QUE É O PROJETO MULHER SEGURA ?
                </div>
                <div className={styles.txt2Ctd3}>
                  No Brasil, a cada minuto, 25 brasileiras sofrem violência doméstica, e apenas 11% dessas vítimas se sentem encorajadas para denunciar o agressor, isso ocorre por conta de insegurança, medo ou em alguns casos por não ter o seu problema resolvido efetivamente.
                  <br />Com isso surge a ideia do projeto Mulher Segura que tem como principal objetivo engajar o hábito de denunciar o agressor de violência doméstica de uma forma segura e efetiva. E também, garantir que aquela vítima tenha um acompanhamento
                  psicológico adequado para conseguir lidar com o trauma da agressão.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.container2} id="asLeis">
        <div className={styles.conteudo4} >
          <div className={styles.txtCtd4}>
            <p> TODAS AS LEIS DE PROTEÇÃO A MULHER</p>
          </div>
          <div className={styles.container2Ctd4}>
            <div className={styles.card1}>
              <div className={styles.card11}>
                <div className={styles.frameCard1}>

                  <p className={styles.tit1}>
                    Lei Maria da Penha
                  </p>
                  <p>
                    A Lei 11.340 foi sancionada em agosto de 2006 e tem o objetivo de criar mecanismos para coibir a violência doméstica e familiar contra a mulher de forma a prevenir, punir e erradicar a violência contra a mulher, através de medidas protetivas.

                  </p>
                  <button className={styles.sb1} onclick=""><a href="https://www.institutomariadapenha.org.br/lei-11340/resumo-da-lei-maria-da-penha.html" target="_blank">Saiba Mais</a></button>
                  <div className={styles.frame2Card1}>
                    <div className={styles.tag1}>
                      <p>Maria da Penha</p>
                    </div>
                    <div className={styles.imgFrame1} style={{ backgroundImage: "url(img/MariaDaPenha.jpg)" }}>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.card11}>
                <div className={styles.frameCard1}>

                  <p className={styles.tit1}>
                    Lei Carolina Dieckmann
                  </p>
                  <p>
                    A Lei 12.737 foi sancionada em 2012 com o intuito de definir crimes cibernéticos no Brasil. Ela recebeu este nome, pois na época que o projeto tramitava a atriz teve o computador invadido e fotos pessoais divulgadas sem autorização por hackers.

                  </p>
                  <button className={styles.sb2} onclick=""><a href="https://www.uol.com.br/tilt/noticias/redacao/2013/04/02/lei-carolina-dieckmann-sobre-crimes-na-internet-entra-em-vigor.htm" target="_blank">Saiba Mais</a></button>
                  <div className={styles.frame2Card1}>
                    <div className={styles.tag1}>
                      <p>Carolina Dieckmann</p>
                    </div>
                    <div className={styles.imgFrame2} style={{ backgroundImage: "url(img/CarolinaDieckmann.jpg)" }}>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.card11}>
                <div className={styles.frameCard1}>

                  <p className={styles.tit1}>
                    Lei do Minuto Seguinte
                  </p>
                  <p>
                    A Lei 12.845 foi sancionada em 2013 e oferece garantias a vítimas de violência sexual, como atendimento imediato pelo SUS, amparo, psicológico e social, exames preventivos e o fornecimento de informações sobre os direitos legais das vítimas.
                  </p>
                  <button className={styles.sb3} onclick=""><a href="https://www.saude.ms.gov.br/secretaria-de-estado-de-saude-orienta-populacao-sobre-lei-do-minuto-seguinte-para-vitimas-de-violencia-sexual/#:~:text=Assim%2C%20a%20Lei%20do%20Minuto,coletados%20no%20exame%20m%C3%A9dico%20legal." target="_blank">Saiba Mais</a></button>
                  <div className={styles.frame2Card1}>
                    <div className={styles.tag1}>
                      <p>Ministério Público</p>
                    </div>
                    <div className={styles.imgFrame3} style={{ backgroundImage: "url(img/LeiDoMinutoSeguinte.jpg)" }}>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.card11}>
                <div className={styles.frameCard1}>

                  <p className={styles.tit1}>
                    Lei Joanna Maranhão
                  </p>
                  <p>
                    A Lei 12.650 foi sancionada em 2015 e alterou os prazos quanto à prescrição de abusos sexuais contra crianças e adolescentes, de forma que a prescrição só passou a valer após a vítima completar 18 anos, e o prazo de denúncia aumentou
                    para 20 anos.
                  </p>
                  <button className={styles.sb4} onclick=""><a href="https://gruporeinserir.com.br/blog/voc%C3%AA-conhece-a-lei-joanna-maranh%C3%A3o/" target="_blank">Saiba Mais</a></button>
                  <div className={styles.frame2Card1}>
                    <div className={styles.tag1}>
                      <p>Joanna Maranhão</p>
                    </div>
                    <div className={styles.imgFrame4} style={{ backgroundImage: "url(img/LeiJoannaMaranhao.jpg)" }}>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.card11}>
                <div className={styles.frameCard1}>

                  <p className={styles.tit1}>
                    Lei do Feminicídio
                  </p>
                  <p>
                    A Lei 13.104 foi sancionada em 2015. Quando uma mulher é morta por violência doméstica, menosprezo ou discriminação à condição de mulher, fica caracterizado o feminicídio, um crime hediondo em que a pena pode
                    chegar a 30 anos de reclusão.
                  </p>
                  <button className={styles.sb5}><a href="https://www.saopaulo.sp.leg.br/mulheres/entenda-o-que-e-feminicidio-e-a-lei-que-tipifica-esse-crime/" target="_blank">Saiba Mais</a></button>
                  <div className={styles.frame2Card1}>
                    <div className={styles.tag1}>
                      <p>Cartaz Senado Federal</p>
                    </div>
                    <div className={styles.imgFrame5} style={{ backgroundImage: "url(img/LeiDoFeminicidio.png)" }}>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className={styles.conteudo5} id="tiposViolencias">
          <div className={styles.barraConteudo5}>

          </div>
          <div className={styles.rowConteudo5}>
            <div className={styles.textConteudo5}>
              <p className={styles.text1Conteudo5}>
                CONHEÇA OS TIPOS DE VIOLÊNCIA
              </p>
            </div>
          </div>


          <div className={styles.titTipoViolencia}>
            <p style={{ color: "white" }}>VIOLÊNCIA FÍSICA</p>
          </div>
          <div className={styles.imgCard1} style={{ backgroundImage: "url(img/ViolenciaFisica.jpg)" }}>
            <div className={styles.quadroTipoViolencia}>
              <div className={styles.tipoViolencia}>

                <p className={styles.titTipoViolencia2}>
                  Entendida como qualquer conduta que ofenda a integridade ou saúde corporal da mulher.
                </p>
                <p className={styles.textTipoViolencia}>
                  ESPANCAMENTO <br /> ATIRAR OBJETOS, SACUDIR E APERTAR OS BRAÇOS <br /> ESTRANGULAMENTO OU SUFOCAMENTO <br /> LESÕES COM OBJETOS CORTANTES OU PERFURANTES <br /> FERIMENTOS CAUSADOS POR QUEIMADURAS OU ARMAS DE FOGO <br /> TORTURA
                </p>

              </div>
            </div>

            <div className={styles.titTipoViolencia}>
              <p style={{ color: "white" }}>VIOLÊNCIA PSICOLÓGICA</p>
            </div>
            <div className={styles.imgCard2} style={{ backgroundImage: "url(img/VIOLENCIAPSICOLOGICA.jpg)" }}>
              <div className={styles.quadroTipoViolencia}>
                <div className={styles.tipoViolencia}>

                  <p className={styles.titTipoViolencia2}>
                    É considerada qualquer conduta que: cause dano emocional; prejudique o pleno desenvolvimento da mulher; ou vise degradar suas ações, crenças e decisões. </p>
                  <p className={styles.textTipoViolencia}>
                    AMEAÇAS <br /> CONSTRANGIMENTO <br /> HUMILHAÇÃO <br /> MANIPULAÇÃO <br /> ISOLAMENTO <br /> DISTORCER FATOS
                  </p>

                </div>


              </div>
            </div>

            <div className={styles.titTipoViolencia}>
              <p style={{ color: "white" }}>VIOLÊNCIA SEXUAL</p>
            </div>
            <div className={styles.imgCard3} style={{ backgroundImage: "url(img/VIOLENCIASEXUAL.jpg)" }}>
              <div className={styles.quadroTipoViolencia}>
                <div className={styles.tipoViolencia}>

                  <p className={styles.titTipoViolencia2}>
                    Trata-se de qualquer conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força. </p>
                  <p className={styles.textTipoViolencia}>
                    ESTUPRO <br /> OBRIGAR A MULHER A FAZER ATOS SEXUAIS QUE CAUSAM DESCONFORTO OU REPULSA
                    <br /> IMPEDIR O USO DE MÉTODOS CONTRACEPTIVOS OU FORÇAR A MULHER A ABORTAR
                    <br /> FORÇAR MATRIMÔNIO, GRAVIDEZ OU PROSTITUIÇÃO POR MEIO DE COAÇÃO <br /> LIMITAR OU ANULAR O EXERCÍCIO DOS DIREITOS SEXUAIS E REPRODUTIVOS DA MULHER
                  </p>

                </div>
              </div>
            </div>

            <div className={styles.titTipoViolencia}>
              <p style={{ color: "white" }}>VIOLÊNCIA PATRIMONIAL</p>
            </div>
            <div className={styles.imgCard4} style={{ backgroundImage: "url(img/VIOLENCIAPATRIMONIAL.jpg)" }}>
              <div className={styles.quadroTipoViolencia}>
                <div className={styles.tipoViolencia}>

                  <p className={styles.titTipoViolencia2}>
                    Entende-se qualquer conduta que configure retenção, subtração, destruição parcial ou total dos objetos, documentos pessoais, bens, valores e direitos ou recursos econômicos.

                  </p>
                  <p className={styles.textTipoViolencia}>
                    CONTROLAR O DINHEIRO
                    <br /> DEIXAR DE PAGAR PENSÃO ALIMENTÍCIA
                    <br /> FURTO, EXTORSÃO OU DANO

                    <br /> DESTRUIÇÃO DE DOCUMENTOS PESSOAIS
                    <br /> PRIVAR DE BENS, VALORES OU RECURSOS ECONÔMICOS
                    <br /> CAUSAR DANOS PROPOSITAIS A OBJETOS DA MULHER OU DOS QUAIS ELA GOSTE
                  </p>

                </div>


              </div>
            </div>

            <div className={styles.titTipoViolencia}>
              <p style={{ color: "white" }}>VIOLÊNCIA MORAL
              </p>
            </div>
            <div className={styles.imgCard5} style={{ backgroundImage: "url(img/VIOLENCIAMORAL.jpg)" }}>
              <div className={styles.quadroTipoViolencia}>
                <div className={styles.tipoViolencia}>

                  <p className={styles.titTipoViolencia2}>
                    É considerada qualquer conduta que configure calúnia, difamação ou injúria. </p>
                  <p className={styles.textTipoViolencia}>
                    ACUSAR A MULHER DE TRAIÇÃO
                    <br /> EMITIR JUÍZOS MORAIS SOBRE A CONDUTA
                    <br /> FAZER CRÍTICAS MENTIROSAS
                    <br /> EXPOR A VIDA ÍNTIMA
                    <br /> REBAIXAR A MULHER POR MEIO DE XINGAMENTOS QUE INCIDEM SOBRE A SUA ÍNDOLE
                    <br /> DESVALORIZAR A VÍTIMA PELO SEU MODO DE SE VESTIR
                  </p>

                </div>


              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.conteudo6} id="nossosServicos">
        <div className={styles.containerConteudo6}>
          <div className={styles.rowConteudo6}>
            <div className={styles.mainContextConteudo6}>
              <p>
                NOSSOS SERVIÇOS
              </p>
              <div className={styles.barraConteudo6}>

              </div>
              <div className={styles.paragrafoConteudo6}>
                Para garantir a segurança das vítimas de violência doméstica, o projeto Mulher Segura oferece alguns serviços inteligentes e efetivos, trazendo acessibilidade para todos os tipos de usuários, sendo eles :
              </div>
            </div>
          </div>



          <div className={styles.img1} style={{ backgroundImage: "url(img/psy.png)" }}></div>
          <div className={styles.img2} style={{ backgroundImage: "url(img/webChat.png)" }}></div>
          <div className={styles.img3} style={{ backgroundImage: "url(img/pararViolencia.png)" }}></div>
          <div className={styles.img4} style={{ backgroundImage: "url(img/sinalDeInformacao.png)" }}></div>

          <div className={styles.txt1b}>Atendimento psicologico</div>
          <div className={styles.txt2b}>Denúncias via chat</div>
          <div className={styles.txt3b}>Denúncias sem necessidade de cadastro</div>
          <div className={styles.txt4b}>Informativos sobre violência domésticas</div>
          <div className={styles.barrabConteudo6}></div>
        </div>
      </div>

      <Footer />

      <Modal handleClose={() => setIsModalNoticiasOpen(false)} isOpen={isModalNoticiasOpen}>
        <ModalHeader handleClose={() => setIsModalNoticiasOpen(false)}> <h2 className={styles.titleNoticias}>Notícias anteriores</h2> </ModalHeader>
        <ModalBody>
          <div className={styles.noticiasLinks}>
            <Noticias />
          </div>
        </ModalBody>
      </Modal>

      <Modal handleClose={() => setIsModalSaibaMaisOpen(false)} isOpen={isModalSaibaMaisOpen}>
        <ModalHeader handleClose={() => setIsModalSaibaMaisOpen(false)}> <h2 className={styles.titleSaibaMais}>Como fazer denúncias?</h2 > </ModalHeader>
        <ModalBody>
          <div className={styles.infoDenuncia}>
            <p>Nós possuímos duas formas de realizar a denúncia, separadas pela urgência:
              <ul className={styles.infoDenunciaClass}>
                <li>
                  <strong>Urgente:</strong> Para denuncias que são extremamente urgentes (caso esteja sofrendo ou presenciando uma agressão neste exato momento),
                  acesse nosso botão "Fazer denúncia" e selecione a opção "Urgente" para acessar o telefone da policia!
                  <br />Após fazer a ligação, caso seja a vítima da agressão não esqueça de realizar o cadastro
                  em nosso site para ter acesso ao atendimento psicólogico!
                </li>
                <li>
                  <strong>Não Urgente:</strong> Nos casos de denúncias não urgentes, nós solicitamos que você realize o cadastro em nosso site, e ao solicitar uma denuncia não urgente, coletamos todas as informações
                  necessárias para abrir um chamado inicial na policia e encaminhamos diretamente para o Telegram, onde os policiais darão inicio ao seu atendimento.
                </li>
              </ul>
            </p>
          </div> </ModalBody>
      </Modal>
    </>
  )
}

export default Institucional