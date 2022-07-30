import React, { useCallback } from "react";
import BotaoAtendimento from "../../common/BotaoAtendimento";
import styles from './styles.module.css';

function Atendimento() {

    var dados = localStorage.getItem('user');
    var usuario = JSON.parse(dados);

    const handleClickButton = useCallback((action) => {


        fetch(`http://localhost:8080/vitimas/consulta/${action}/${usuario.nome}/${usuario.email}`);

        alert("Uma solicitação foi enviada, fique de olho no seu email para o retorno &#128522");
    })


    return (
        <>
            <section className={styles.section}>
                <div className={styles.projetoMulherContainer}>
                    <div>
                        <h1 className={styles.pageTitle}>PROJETO MULHER SEGURA</h1>
                        <h2 className={styles.title}>Seja bem vinda, {usuario.nome}!</h2>
                        <p>Esse é um espaço totalmente dedicado a você, o projeto mulher segura te deseja as
                            boa vindas e esperamos ajudar de alguma forma a solucionar o seu problema.</p>
                        <p>Abaixo separamos algumas opções de consulta com psicologos especializados ao
                            combate de violencia domestica, onde cada opção é focada em situações especificas.</p>
                    </div>
                    <div>
                        <div className={styles.boxAzul}>
                            <img src="/img/mulher-psicologa.png" alt="Psicóloga" />
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.divider} />
            <section className={styles.section}>
                <h2 className={styles.title}>Selecione uma das opções abaixo:</h2>
                <div className={styles.contatoContainer}>
                    <div>
                        <img src="/img/psicologo1.png" alt="Psicóloga" />
                        <p>Gostaria de saber<br /> mais sobre<br /> violência doméstica</p>
                        <BotaoAtendimento onClick={() => handleClickButton('saberMais')}>Agendar Consulta<br /> com especialista</BotaoAtendimento>
                    </div>
                    <div>
                        <img src="/img/psicologo2.png" alt="Psicóloga" />
                        <p>Estou sendo<br /> vítima de<br /> violência doméstica</p>
                        <BotaoAtendimento onClick={() => handleClickButton('estouSendo')}>Agendar Consulta<br /> com especialista</BotaoAtendimento>
                    </div>
                    <div>
                        <img src="/img/psicologo3.png" alt="Psicóloga" />
                        <p>Já fui vítima<br /> de violência<br /> doméstica </p>
                        <BotaoAtendimento onClick={() => handleClickButton('jaFui')}>Agendar Consulta<br /> com especialista</BotaoAtendimento>
                    </div>
                </div>
            </section>
        </>

    );


}

export default Atendimento;