import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import {useLocation} from 'react-router-dom'

const Nav = ({isLoggedin}) => {



    return (
        <nav className={styles.nav}>
            <Link to="/institucional"> <img src="../../../img/logo.png" className={styles.logo} alt="Logo Mulher Segura" /></Link>
            <div className={styles.menu}>
                <ul>
                    <li><Link to="/#projeto">Projeto</Link></li>
                    <li><Link to="/#asLeis">As Leis</Link></li>
                    <li><Link to="/#tiposViolencias">Tipos de Violência</Link></li>
                    <li><Link to="/#nossosServicos">Serviços</Link></li>
                    <li><Link to="/#contatos"a href="">Contatos</Link></li>
                    {
                        isLoggedin &&
                        <li><Link to="/atendimento" href="">Atendimento</Link></li>
                    }
                </ul>
                <div>
                    <ul>
                        <li><Link to="/confirmarCadastro" className={styles.cadastro}>Cadastre-se</Link></li>
                        <li><Link to="/login" target="blank" className={styles.btnEntrar}>ENTRAR</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav