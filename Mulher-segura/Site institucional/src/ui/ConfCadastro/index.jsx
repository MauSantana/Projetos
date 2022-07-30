import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import FooterSec from '../../common/FooterSec'


function ConfirmarCadastro(){

    return(
        <>
                <img className={styles.vetor1} src="../img/esquerda.png" alt="" />
                <img className={styles.vetor2} src="../img/direita.png" alt="" />

                <section className={styles.botoesCad}>
                    <h2>Precisamos da sua confirmação!</h2>
                    <p>Para encaminhar a página correta, nos informe abaixo se você é psicólogo (a) ou não:</p>
                    <div className={styles.botoes}>
                        <div className={`row ${styles.botoes}`}>
                            <div className="col">
                                <button type="button" className={styles.btnVitima}>
                                    <Link to="/cadastroVitima">
                                        <strong>Não sou psicólogo (a)!</strong>
                                    </Link>
                                </button>
                            </div>
                            <div className={`col ${styles.btnProximoWrapper}`}>
                                <button type="button" className={styles.btnPsicologo}>
                                    <Link to="/cadastroPsicologo">
                                        <strong>Sou psicólogo (a)!</strong>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
    
        <FooterSec/>
        </>
    )
}

export default ConfirmarCadastro