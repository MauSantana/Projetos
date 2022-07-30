import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../common/Modal'
import Footer from '../../common/Footer'
import FooterSec from '../../common/FooterSec'
import { useHistory } from 'react-router'


function Urgencia() {
    const history = useHistory();
    
    var dados = localStorage.getItem('user');
    var usuario = JSON.parse(dados);

    const handleClickButton = useCallback(() => {
        if (localStorage.getItem('user') != null) {
            fetch(`http://localhost:8080/vitimas/mesagemAutoridades/${usuario.email}`);
            alert("Solicitação enviada para as autoridades, aguarde contato");

        } else {
            alert("Por favor realize o login");
            history.push('/login');
        }


    })

    const [isModalUrgenteOpen, setIsModalUrgenteOpen] = useState(false)
    return (
        <>
            <img className={styles.vetor1} src="../img/esquerda.png" alt="" />
            <img className={styles.vetor2} src="../img/direita.png" alt="" />

            <section className={styles.botoesDen}>
                <h2>Precisamos da sua confirmação!</h2>
                <p>Por favor nos informe a urgência da sua denúncia. Caso precise entrar em contato imediatamente com a
                    polícia, selecione <strong>"URGENTE"</strong>, caso esteja segura provisoriamente e possa aguardar alguns minutos a mais, selecione <strong>"Não urgente"</strong>:</p>
                <div className={styles.botoes}>
                    <div className={`row ${styles.botoes}`}>
                        <div class="col">
                            <button type="button" className={styles.btnUrgente} onClick={() => setIsModalUrgenteOpen(true)}>
                                <strong>URGENTE!</strong>
                            </button>
                        </div>
                        <div class="col btnProximoWrapper">
                            <button type="button" className={styles.btnNaoUrgente} onClick={() => handleClickButton()}>
                                {/* <Link to="/"> */}
                                <strong>Não urgente!</strong>
                                {/* </Link> */}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <FooterSec />

            <Modal handleClose={() => setIsModalUrgenteOpen(false)} isOpen={isModalUrgenteOpen}>
                <ModalHeader handleClose={() => setIsModalUrgenteOpen(false)}><h2 className={styles.titleModal}>Para denúncias urgentes!</h2></ModalHeader>
                <ModalBody>
                    <div className={styles.denunciaUrgente}>
                        <p>Entre em contato através do número <strong>180</strong>!</p>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default Urgencia