import styles from "./styles.module.css";
import { Table } from "react-bootstrap";
import Input from "../../common/Input";
import { Link } from "react-router-dom";
import FooterSec from "../../common/FooterSec";
import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../api";
import { useForm } from "react-hook-form";

function CadastroPsicologo() {
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [cpfDigitado, setCpfDigitado] = useState("");
  const [rgDigitado, setRgDigitado] = useState("");
  const [usernameDigitado, setUsernameDigitado] = useState("");
  const [senhaDigitado, setSenhaDigitado] = useState("");
  const [datadenascimentoDigitado, setDataDeNascimentoDigitado] = useState("");
  const [emailDigitado, setEmailDigitado] = useState("");
  const [celularDigitado, setCelularDigitado] = useState("");
  const [telefone1Digitado, setTelefone1Digitado] = useState("");
  const [telefone2Digitado, setTelefone2Digitado] = useState("");
  const [numeroDoCrpDigitado, setNumeroDoCrpDigitado] = useState("");

  const history = useHistory();

  function cadastrar(e) {
    // e.preventDefault();

    api
      .post("/psicologos", {
        nome: nomeDigitado,
        cpf: cpfDigitado,
        rg: rgDigitado,
        username: usernameDigitado,
        senha: senhaDigitado,
        datadenascimento: datadenascimentoDigitado,
        email: emailDigitado,
        celular: celularDigitado,
        telefone1: telefone1Digitado,
        telefone2: telefone2Digitado,
        numeroDoCrp: numeroDoCrpDigitado,
      })
      .then((resposta) => {
        history.push("/Login");
      })
      .catch((erro) => {
        console.log("Erro ao cadastrar vitima!");
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => cadastrar();

  return (
    <>
      <img className={styles.vetor1} src="../img/esquerda.png" alt="" />
      <img className={styles.vetor2} src="../img/direita.png" alt="" />
      <section>
        <div className={styles.container}>
          <h2>Cadastro de psicólogo!</h2>
          <p>
            É através do cadastro a seguir que vamos conseguir validar seus
            dados e cadastra-lo(a) em nosso sistema. Por favor, não deixe de
            passar nenhum dado, é importante para encaminhar pessoas que
            precisam de ajuda!
          </p>
          <div className={styles.boxForm}>
            <form onSubmit={handleSubmit(cadastrar, onSubmit)}>
              <div id="section1">
                <h4>Dados pessoais:</h4>
                <div id="form_Psicologo">
                  <Table
                    className={`table-bordered ${styles.tabela}`}
                    width="100%"
                    cellpadding="0"
                  >
                    <thead>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Nome completo"
                            id="nomePsi"
                            name="nomePsi"
                            placeholder="Jane Doe"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setNomeDigitado(e.target.value)}
                            ref={register("nomePsi", {
                              required: "Insira seu nome",
                              maxLength: {
                                value: 5,
                                message: "O nome está muito grande",
                              },
                            })}
                          />
                          {errors.nomePsi && (
                            <p className={styles.errorMessages}>
                              {errors.nomePsi.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="CPF:"
                            id="cpfPsi"
                            name="cpfPsi"
                            placeholder="___.___.___-__"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setCpfDigitado(e.target.value)}
                            ref={register("cpfPsi", {
                              required: {
                                value: true,
                                message: "Informe a seu CPF!",
                              },
                              maxLength: {
                                value: 11,
                                message: "Informe um CPF válido",
                              },
                              minLength: {
                                value: 11,
                                message: "Informe um CPF válido",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.cpfPsi && (
                            <p className={styles.errorMessages}>
                              {errors.cpfPsi.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="RG:"
                            id="RGPsi"
                            name="rgPsi"
                            placeholder="___.___.___-__"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setRgDigitado(e.target.value)}
                            ref={register("rgPsi", {
                              required: {
                                value: true,
                                message: "Informe o seu RG!",
                              },
                              maxLength: {
                                value: 9,
                                message: "Informe um RG válido",
                              },
                              minLength: {
                                value: 9,
                                message: "Informe um RG válido",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.rgPsi && (
                            <p className={styles.errorMessages}>
                              {errors.rgPsi.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Celular:"
                            id="celular"
                            name="celular"
                            placeholder="(__)_____-____"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setCelularDigitado(e.target.value)}
                            ref={register("celular", {
                              required: {
                                value: true,
                                message: "Informe o seu celular!",
                              },
                              minLength: {
                                value: 11,
                                message: "Insira um celular válido",
                              },
                              maxLength: {
                                value: 11,
                                message: "Insira um celular válido",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.celular && (
                            <p className={styles.errorMessages}>
                              {errors.celular.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Data de nascimento:"
                            id="nascimentoPsi"
                            name="nascimentoPsi"
                            placeholder="__/__/____"
                            type="Date"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setDataDeNascimentoDigitado(e.target.value)
                            }
                            ref={register("nascimentoPsi", {
                              required: {
                                value: true,
                                message: "Informe a sua data de nascimento!",
                              },
                              maxLength: {
                                value: 10,
                                message:
                                  "Informe uma data válida ex. 21/03/1994",
                              },
                            })}
                          />
                          {errors.nascimentoPsi && (
                            <p className={styles.errorMessages}>
                              {errors.nascimentoPsi.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="CRP:"
                            id="crp"
                            name="crp"
                            placeholder="06/000470-IS"
                            type="number"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setNumeroDoCrpDigitado(e.target.value)
                            }
                            ref={register("crp", {
                              required: {
                                value: true,
                                message: "Informe a seu CRP!",
                              },
                              maxLength: {
                                value: 11,
                                message: "Informe um CRP válido",
                              },
                              minLength: {
                                value: 11,
                                message: "Informe um CRP válido",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.crp && (
                            <p className={styles.errorMessages}>
                              {errors.crp.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Telefone 1:"
                            id="telefone1"
                            name="telefone1"
                            placeholder="(__)____-____"
                            type="number"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setTelefone1Digitado(e.target.value)
                            }
                            ref={register("telefone1", {
                              required: {
                                value: true,
                                message: "Informe o seu telefone!",
                              },
                              minLength: {
                                value: 10,
                                message: "Insira um telefone válido!",
                              },
                              maxLength: {
                                value: 10,
                                message: "Insira um telefone válido!",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.telefone1 && (
                            <p className={styles.errorMessages}>
                              {errors.telefone1.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Telefone 2:"
                            id="telefone2"
                            name="telefone2"
                            placeholder="(__)____-____"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setTelefone2Digitado(e.target.value)
                            }
                            ref={register("telefone2", {
                              required: {
                                value: true,
                                message: "Informe o seu telefone!",
                              },
                              minLength: {
                                value: 10,
                                message: "Insira um telefone válido!",
                              },
                              maxLength: {
                                value: 10,
                                message: "Insira um telefone válido!",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.telefone2 && (
                            <p className={styles.errorMessages}>
                              {errors.telefone2.message}
                            </p>
                          )}
                        </td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>
              <div id="section2" className="secao-formulario">
                <h4>Contato e login:</h4>
                <div id="form_contato_psicologo">
                  <Table
                    className={`table table-bordered ${styles.tabela}`}
                    width="100%"
                    cellpadding="0"
                  >
                    <thead>
                      <tr>
                        <td width="50%">
                          <Input
                            label="E-mail:"
                            id="emailPsi"
                            name="emailPsi"
                            placeholder="email@email.com"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setEmailDigitado(e.target.value)}
                            ref={register("emailPsi", {
                              required: {
                                value: true,
                                message: "Informe o seu email!",
                              },
                            })}
                          />
                          {errors.emailPsi && (
                            <p className={styles.errorMessages}>
                              {errors.emailPsi.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Confirmar e-mail:"
                            id="confemailPsi"
                            placeholder="email@email.com"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setEmailDigitado(e.target.value)}
                            ref={register("confemailPsi", {
                              required: {
                                value: true,
                                message: "Confirme o seu Email!",
                              },
                              equalTo: {
                                value: "#email",
                                message: "Os emails devem ser iguais!",
                              },
                            })}
                          />
                          {errors.confemailPsi && (
                            <p className={styles.errorMessages}>
                              {errors.confemailPsi.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Username:"
                            id="usernamePsi"
                            name="usernamePsi"
                            placeholder="username"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setUsernameDigitado(e.target.value)
                            }
                            ref={register("usernamePsi", {
                              required: {
                                value: true,
                                message: "Informe seu username!",
                              },
                            })}
                          />
                          {errors.usernamePsi && (
                            <p className={styles.errorMessages}>
                              {errors.usernamePsi.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Confirmar username:"
                            id="usernameConf"
                            name="usernameConf"
                            placeholder="username"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setUsernameDigitado(e.target.value)
                            }
                            ref={register("usernameConf", {
                              required: {
                                value: true,
                                message: "Informe seu username!",
                              },
                              equalTo: {
                                value: "#usernamePsi",
                                message: "Os emails devem ser iguais!",
                              },
                            })}
                          />
                          {errors.usernameConf && (
                            <p className={styles.errorMessages}>
                              {errors.usernameConf.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Senha:"
                            id="senhaPsi"
                            name="senhaPsi"
                            placeholder="senha123"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setSenhaDigitado(e.target.value)}
                            ref={register("senhaPsi", {
                              required: {
                                value: true,
                                message: "Informe uma senha!",
                              },
                              minLength: {
                                value: 8,
                                message:
                                  "A senha deve ter no minimo 8 caracteres!",
                              },
                            })}
                          />
                          {errors.senhaPsi && (
                            <p className={styles.errorMessages}>
                              {errors.senhaPsi.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Confirmar senha:"
                            id="confsenhaPsi"
                            name="confsenhaPsi"
                            placeholder="senha123"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setSenhaDigitado(e.target.value)}
                            ref={register("confsenhaPsi", {
                              required: {
                                value: true,
                                message: "Confirme sua senha!",
                              },
                              minLength: {
                                value: 8,
                                message:
                                  "A senha deve ter no minimo 8 caracteres",
                              },
                              equalTo: {
                                value: "#senhaPsi",
                                message: "As Senhas devem ser iguais!",
                              },
                            })}
                          />
                          {errors.confsenhaPsi && (
                            <p className={styles.errorMessages}>
                              {errors.confsenhaPsi.message}
                            </p>
                          )}
                        </td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>
              <div className={`row ${styles.botoes}`}>
                <div className="col">
                  <button
                    type="button"
                    className={styles.btnAnterior}
                    // onclick={() => anterior()}
                  >
                    <Link to="/confirmarCadastro">Voltar</Link>
                  </button>
                </div>
                <div className="col">
                  <button type="submit" className={styles.btnProximo} o>
                    Confirma
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterSec />
    </>
  );
}

export default CadastroPsicologo;
