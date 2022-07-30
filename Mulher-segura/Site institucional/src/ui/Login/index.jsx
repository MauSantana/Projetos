import { useHistory } from 'react-router'
import Button from '../../common/Button'
import Checkbox from '../../common/Checkbox'
import Input from '../../common/Input'
import styles from './styles.module.css'
import api from '../../api'

const LoginPage = ({ onLogin }) => {

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const elements = e.target.elements;
        const values = {
            email: elements.email.value,
            senha: elements.password.value,
            keepConnected: elements.keepConnected.checked
        }


        if (values.email.trim() === "" && values.senha.trim() === "") {
            console.log(values);
            alert("Os campos não podem ser vazios")
            return
        }
        onLogin()


        try {
            const response = await fetch(`http://localhost:8080/vitimas/login/${values.email}/${values.senha}`)
                .then(response => response.json());


            const user = response[0];

            localStorage.setItem('user', JSON.stringify(user));

            // localStorage.getItem('mod') != null

            if (localStorage.getItem('user') != null) {
                console.log("usuario indentificado, redirecionanddo");
                return history.push('/atendimento');

            }
        } catch (error) {
            alert('Email ou senha incorretos');
        }


    }

    return (
        <section className={styles.section}>
            <div className={styles.pageLeftSide}>
                <div>
                    <div className={styles.logo}>
                        <img src="/img/logo.png" alt="Logo Mulher Segura" />
                    </div>
                    <p>Para acessar ao nosso site, por favor, realize o login:</p>
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Email"
                            type="email"
                            id="email"
                        />
                        <Input
                            label="Senha"
                            type="password"
                            id="password"
                        />
                        <div className={styles.options}>
                            <div>
                                <Checkbox id="keepConnected">
                                    Manter-me conectado
                                </Checkbox>
                            </div>
                            <div>
                                <a href="#" className={styles.link}>Esqueceu sua senha?</a>
                            </div>
                        </div>
                        <div>
                            <Button type="submit">
                                Entrar
                            </Button>
                        </div>
                        <br />
                        <p>
                            Ainda não possui um cadastro? <br />
                            <a href="#" className={styles.link}>Cadastre-se!</a>
                        </p>
                    </form>
                </div>
            </div>
            <div className={styles.pageRightSide} style={{ backgroundImage: 'url("/img/mulheres.png")' }}>
                <p>Acima de tudo, seja a heroína da sua vida, e não a vítima.</p>
            </div>
        </section>
    )
}

export default LoginPage