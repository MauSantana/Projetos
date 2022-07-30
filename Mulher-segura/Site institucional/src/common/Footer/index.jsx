import styles from './styles.module.css'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../common/Modal'
import { useCallback, useState } from 'react'
import { useHistory } from "react-router";
import api from '../../api'

function Footer() {

  const [isModalNoticiasOpen, setIsModalNoticiasOpen] = useState(false)
  const [emailDigitado, setEmailDigitado] = useState("");

  const history = useHistory();

  function cadastrar(e) {
    e.preventDefault();
    api.post("/vitimas/receber-autualizacao", {
      email: emailDigitado
    }).then((resposta) => {
      alert("Email Cadastrado com sucesso!")
    }).catch((erro) => {
      console.log("Erro ao cadastrar vitima!")
    });

    

  }

  return (
    <>
      <footer>
        <div className={styles.caixaEmail}>
          <form onSubmit={cadastrar}>
            <center>
              <p className={styles.caixaEmailTxt1}>PARA ACOMPANHAR NOSSO TRABALHO, NOS INFORME SEU E-MAIL:</p>
              <p className={styles.caixaEmailTxt2}>Caso tenho interesse em acompanhar nosso projeto, encaminhe um e-mail para caixa abaixo e em te encaminharemos as nossas novidades e projetos futuros</p>
              <input className={styles.inpCaixaEmail} placeholder="Digite seu email..." type="email" onChange={e => setEmailDigitado(e.target.value)}></input>
              <button className={styles.btnCaixaEmail} type="submit"><p> ENVIAR</p> </button>
            </center>
          </form>
        </div>
        <div className={styles.contatos}>
          <div className={styles.txt1Contatos}>
            <h1>Peguntas Frequentes:</h1>
            <button onClick={() => setIsModalNoticiasOpen(true)}>O que é o projeto Mulher Segura?</button><br />
            <button onClick={() => setIsModalNoticiasOpen(true)}>Como fazer uma denúncia anônima?</button><br />
            <button onClick={() => setIsModalNoticiasOpen(true)}>Quem tem acesso ao meus dados?</button>
            <p>Mais dúvidas? Acesse nosso portal de ajuda clicando <a href="https://forms.monday.com/forms/9bb9bf59f4bbf6ef905783a92becd215?r=use1" target="_blank">aqui</a>!</p>
          </div>
          <div className={styles.txt2Contatos}>
            <h1>Contatos</h1>
            <p>(11)2153-1421</p>
            <p>Rua Haddock Lobo </p>
            <p>contato@mulhersegura.com</p>
          </div>

          <div className={styles.iconesContatos}>
            <a href=""><img src="../img/facebook.png" alt="" /></a>
            <a href=""><img src="../img/github.png" alt="" /></a>
            <a href=""><img src="../img/instagram.png" alt="" /></a>
          </div>

        </div>
      </footer>

      <Modal handleClose={() => setIsModalNoticiasOpen(false)} isOpen={isModalNoticiasOpen}>
        <ModalHeader handleClose={() => setIsModalNoticiasOpen(false)}><h2 className={styles.titleModal}>Perguntas frequentes</h2></ModalHeader>
        <ModalBody>
          <div className={styles.pergFrequentes}>
            <h4>O que é o projeto Mulher Segura?</h4>
            <p>O projeto Mulher Segura que tem como principal objetivo engajar o hábito de denunciar o agressor de violência doméstica de uma forma segura e efetiva. E também, garantir que aquela vítima tenha um acompanhamento
              psicológico adequado para conseguir lidar com o trauma da agressão.</p>

            <h4>Como fazer uma denúncia anônima?</h4>
            <p>Para realizar uma denúncia anônima, basta ligar no número 180 e informar que não deseja ser identificado!</p>

            <h4>Quem tem acesso ao meus dados?</h4>
            <p>Seus dados são acessados apenas pela equipe Mulher segura, e a policia quando realiza alguma denúncia!</p>
          </div> </ModalBody>
      </Modal>
    </>
  )
}

export default Footer