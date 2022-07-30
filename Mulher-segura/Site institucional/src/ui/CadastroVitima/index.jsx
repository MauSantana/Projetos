import { Table } from "react-bootstrap";
import Input from "../../common/Input";
import Select from "../../common/Select";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import FooterSec from "../../common/FooterSec";
import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../api";
import { useForm } from "react-hook-form";

function CadastroVitima() {
  const [nomeDigitado, setNomeDigitado] = useState("");
  const [cpfDigitado, setCpfDigitado] = useState("");
  const [rgDigitado, setRgDigitado] = useState("");
  const [usernameDigitado, setUsernameDigitado] = useState("");
  const [senhaDigitado, setSenhaDigitado] = useState("");
  const [datadenascimentoDigitado, setDataDeNascimentoDigitado] = useState("");
  const [emailDigitado, setEmailDigitado] = useState("");
  const [celularDigitado, setCelularDigitado] = useState("");
  const [celular2Digitado, setCelular2Digitado] = useState("");
  const [filhosSNDigitado, setFilhosSNDigitado] = useState("");
  const [quantidadeDeFilhosDigitado, setQuantidadeDeFilhosDigitado] =
    useState("");
  const [estadoCivilDigitado, setEstadoCivilDigitado] = useState("");
  const [moraComParceiroDigitado, setMoraComParceiroDigitado] = useState("");
  const [nomeDoParceiroDigitado, setNomeDoParceiroDigitado] = useState("");
  const [cepDigitado, setCepDigitado] = useState("");
  const [numeroDaCasaDigitado, setNumeroDaCasaDigitado] = useState("");
  const [ruaDigitado, setRuaDigitado] = useState("");
  const [complementoDigitado, setComplementoDigitado] = useState("");
  const [referenciaDigitado, setReferenciaDigitado] = useState("");
  const [cidadeDigitado, setCidadeDigitado] = useState("");
  const [estadoDigitado, setEstadoDigitado] = useState("");
  const [bairroDigitado, setBairroDigitado] = useState("");
  const [nomeContatoEmergencialDigitado, setNomeContatoEmergencialDigitado] =
    useState("");
  const [emailEmergencialDigitado, setEmailEmergencialDigitado] = useState("");
  const [celularEmergencialDigitado, setCelularEmergencialDigitado] =
    useState("");
  const [telefoneEmergencialDigitado, setTelefoneEmergencialDigitado] =
    useState("");

  const history = useHistory();

  function cadastrar(e) {
    // e.preventDefault();

    if (filhosSNDigitado == "Sim") {
      setFilhosSNDigitado(true);
    } else {
      setFilhosSNDigitado(false);
    }

    if (moraComParceiroDigitado == "Sim") {
      setMoraComParceiroDigitado(true);
    } else {
      setMoraComParceiroDigitado(false);
    }

    api
      .post("/vitimas", {
        nome: nomeDigitado,
        cpf: cpfDigitado,
        rg: rgDigitado,
        username: usernameDigitado,
        senha: senhaDigitado,
        datadenascimento: datadenascimentoDigitado,
        email: emailDigitado,
        celular: celularDigitado,
        celular2: celular2Digitado,
        filhosSN: filhosSNDigitado,
        quantidadeDeFilhos: quantidadeDeFilhosDigitado,
        estadoCivil: estadoCivilDigitado,
        moraComParceiroSN: moraComParceiroDigitado,
        nomeDoParceiro: nomeDoParceiroDigitado,
        endereco: {
          cep: cepDigitado,
          numeroDaCasa: numeroDaCasaDigitado,
          rua: ruaDigitado,
          complemento: complementoDigitado,
          referencia: referenciaDigitado,
          cidade: cidadeDigitado,
          estado: estadoDigitado,
          bairro: bairroDigitado,
        },
        contatosEmergenciais: [
          {
            nome: nomeContatoEmergencialDigitado,
            email: emailEmergencialDigitado,
            celular: celularEmergencialDigitado,
            telefone: telefoneEmergencialDigitado,
          },
        ],
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
  const onChange = (data) => cadastrar();

  return (
    <>
      <div className={styles.container}>
        <img className={styles.vetor1} src="../img/esquerda.png" alt="" />
        <img className={styles.vetor2} src="../img/direita.png" alt="" />
        <h2>Cadastro de usuário!</h2>
        <p>
          É através do cadastro a seguir que vamos conseguir te orientar e
          ajudar da melhor forma. Fique tranquila, os dados serão utilizados
          apenas em situações de emergência (ao realizar uma denúncia), para
          facilitar e otimizar o fornecimento de dados essenciais para que a
          policia te ajude!
        </p>
        <div className={styles.boxForm}>
          <div className={styles.cadastroPessoal}>
            <form onSubmit={handleSubmit(cadastrar, onChange)}>
              <div id="section1" className={styles.secaoFormulario}>
                <h4>Dados pessoais:</h4>
                <div id="form_usuario">
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
                            name="nomeV"
                            id="nome"
                            placeholder="Jane Doe"
                            type="text"
                            ref={register("nomeV", {
                              required: {
                                value: true,
                                message: "Informe o seu nome!",
                              },
                              maxLength: {
                                value: 50,
                                message:
                                  "O nome não deve ter mais de 50 caracteres",
                              },
                            })}
                            outline={false}
                            height="40px"
                            onChange={(e) => setNomeDigitado(e.target.value)}
                          />
                          {errors.nomeV && (
                            <p className={styles.errorMessages}>
                              {errors.nomeV.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Data de nascimento:"
                            name="nascimento"
                            id="nascimento"
                            placeholder="__/__/____"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setDataDeNascimentoDigitado(e.target.value)
                            }
                            ref={register("nascimento", {
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
                          {errors.nascimento && (
                            <p className={styles.errorMessages}>
                              {errors.nascimento.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="CPF:"
                            id="cpf"
                            placeholder="___.___.___-__"
                            name="cpf"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setCpfDigitado(e.target.value)}
                            ref={register("cpf", {
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
                          {errors.cpf && (
                            <p className={styles.errorMessages}>
                              {errors.cpf.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="RG:"
                            id="rg"
                            name="rg"
                            placeholder="________-_"
                            type="number"
                            outline={false}
                            height="40px"
                            onChange={(e) => setRgDigitado(e.target.value)}
                            ref={register("rg", {
                              required: {
                                value: true,
                                message: "Informe a seu RG!",
                              },
                              maxLength: {
                                value: 9,
                                message: "Informe um RG válido",
                              },
                              minLength: {
                                valeu: 9,
                                message: "Informe um RG válido",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números!",
                              },
                            })}
                          />
                          {errors.rg && (
                            <p className={styles.errorMessages}>
                              {errors.rg.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Select
                            label="Possui filhos?"
                            id="filhos"
                            outline={false}
                            height="40px"
                            name="filhos"
                            options={[
                              ["Sim", "Sim"],
                              ["Não", "Não"],
                            ]}
                            onChange={(e) =>
                              setFilhosSNDigitado(e.target.value)
                            }
                            ref={register("filhos", {
                              required: {
                                value: true,
                                message: "Selecione uma opção",
                              },
                            })}
                          />
                          {errors.filhos && (
                            <p className={styles.errorMessages}>
                              {errors.filhos.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Quantos?"
                            id="qtdFilhos"
                            name="qtdFilhos"
                            placeholder="0"
                            type="number"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setQuantidadeDeFilhosDigitado(e.target.value)
                            }
                            ref={register("qtdFilhos", {
                              required: {
                                value: true,
                                message:
                                  "Digite a quantidade de filhos que você possui",
                              },
                              number: {
                                value: true,
                                message: "Insira apenas números",
                              },
                            })}
                          />
                          {errors.qtdFilhos && (
                            <p className={styles.errorMessages}>
                              {errors.qtdFilhos.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Select
                            label="Estado civil:"
                            id="estadoCivil"
                            outline={false}
                            height="40px"
                            name="estadoCivil"
                            options={[
                              ["Solteira", "Solteira"],
                              ["Casada", "Casada"],
                              ["Viúva", "Viúva"],
                              ["Namorando", "Namorando"],
                              ["Divorciada", "Divorciada"],
                            ]}
                            onChange={(e) =>
                              setEstadoCivilDigitado(e.target.value)
                            }
                            ref={register("estadoCivil", {
                              required: {
                                value: true,
                                message: "Selecione uma opção",
                              },
                            })}
                          />
                          {errors.estadoCivil && (
                            <p className={styles.errorMessages}>
                              {errors.estadoCivil.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Select
                            label="Mora com o parceiro?"
                            id="temParceiro"
                            outline={false}
                            height="40px"
                            name="temParceiro"
                            options={[
                              ["Sim", "Sim"],
                              ["Não", "Não"],
                            ]}
                            onChange={(e) =>
                              setMoraComParceiroDigitado(e.target.value)
                            }
                            ref={register("temParceiro", {
                              required: {
                                value: true,
                                message: "Selecione uma opção",
                              },
                            })}
                          />
                          {errors.temParceiro && (
                            <p className={styles.errorMessages}>
                              {errors.temParceiro.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Nome do parceiro:"
                            id="nomeParceiro"
                            name="nomeParceiro"
                            placeholder="João Doe"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setNomeDoParceiroDigitado(e.target.value)
                            }
                            ref={register("nomeParceiro", {
                              required: {
                                value: true,
                                message: "Informe o nome do seu parceiro",
                              },
                              maxLength: {
                                value: 50,
                                message:
                                  "O nome não deve ter mais de 50 caracteres",
                              },
                            })}
                          />
                          {errors.nomeParceiro && (
                            <p className={styles.errorMessages}>
                              {errors.nomeParceiro.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Login:"
                            id="login"
                            name="login"
                            placeholder="username"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setUsernameDigitado(e.target.value)
                            }
                            ref={register("login", {
                              required: {
                                value: true,
                                message: "Informe um login",
                              },
                              maxLength: {
                                value: 50,
                                message:
                                  "O login não deve ter mais de 30 caracteres",
                              },
                            })}
                          />
                          {errors.login && (
                            <p className={styles.errorMessages}>
                              {errors.login.message}
                            </p>
                          )}
                        </td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>

              <div id="section2" className={styles.secaoFormulario}>
                <h4>Endereço:</h4>
                <div id="form_endereco">
                  <Table
                    className={`table-bordered ${styles.tabela}`}
                    width="100%"
                    cellpadding="0"
                  >
                    <thead>
                      <tr>
                        <td width="35%" colspan="2">
                          <Input
                            label="Rua:"
                            id="rua"
                            name="rua"
                            placeholder="Rua Um"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setRuaDigitado(e.target.value)}
                            ref={register("rua", {
                              required: {
                                value: true,
                                message:
                                  "Informe o seu bairro de residência atual!",
                              },
                            })}
                          />
                          {errors.rua && (
                            <p className={styles.errorMessages}>
                              {errors.rua.message}
                            </p>
                          )}
                        </td>
                        <td width="30%">
                          <Input
                            label="Número:"
                            id="numero"
                            name="numero"
                            placeholder="0000"
                            type="number"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setNumeroDaCasaDigitado(e.target.value)
                            }
                            ref={register("numero", {
                              required: {
                                value: true,
                                message: "Informe o número da sua residência!",
                              },
                            })}
                          />
                          {errors.numero && (
                            <p className={styles.errorMessages}>
                              {errors.numero.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="35%" colspan="2">
                          <Input
                            label="Bairro:"
                            id="bairro"
                            name="bairro"
                            placeholder="PInheiros"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setBairroDigitado(e.target.value)}
                            ref={register("bairro", {
                              required: {
                                value: true,
                                message:
                                  "Informe o seu bairro de residência atual!",
                              },
                            })}
                          />
                          {errors.bairro && (
                            <p className={styles.errorMessages}>
                              {errors.bairro.message}
                            </p>
                          )}
                        </td>
                        <td width="30%">
                          <Input
                            label="Complemento:"
                            id="complemento"
                            name="complemento"
                            placeholder="Casa dos fundos"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setComplementoDigitado(e.target.value)
                            }
                            ref={register("complemento", {
                              required: {
                                value: true,
                                message:
                                  "Complemente sua localização!",
                              },
                            })}
                          />
                          {errors.complemento && (
                            <p className={styles.errorMessages}>
                              {errors.complemento.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="40%">
                          <Input
                            label="Cidade:"
                            id="cidade"
                            name="cidade"
                            placeholder="São Paulo"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setCidadeDigitado(e.target.value)}
                            ref={register("cidade", {
                              required: {
                                value: true,
                                message:
                                  "Informe a cidade onde você mora atualmente!",
                              },
                            })}
                          />
                          {errors.cidade && (
                            <p className={styles.errorMessages}>
                              {errors.cidade.message}
                            </p>
                          )}
                        </td>
                        <td width="30%">
                          <Input
                            label="CEP:"
                            id="cep"
                            name="cep"
                            placeholder="_____-___"
                            type="number"
                            outline={false}
                            height="40px"
                            onChange={(e) => setCepDigitado(e.target.value)}
                            ref={register("cep", {
                              required: {
                                value: true,
                                message: "Digite um CEP válido",
                              },
                              minLength: {
                                value: 8,
                                message: "O CEP precisa ter 8 números",
                              },
                              number: {
                                value: "Insira apenas números",
                              },
                              maxLength: {
                                value: 8,
                                message: "O CEP tem apenas 8 números",
                              },
                            })}
                          />
                          {errors.cep && (
                            <p className={styles.errorMessages}>
                              {errors.cep.message}
                            </p>
                          )}
                        </td>
                        <td width="30%">
                          <Input
                            label="Estado:"
                            id="estado"
                            name="estado"
                            placeholder="São Paulo"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setEstadoDigitado(e.target.value)}
                            ref={register("estado", {
                              required: {
                                value: true,
                                message: "Informe o seu estado de residência!",
                              },
                            })}
                          />
                          {errors.estado && (
                            <p className={styles.errorMessages}>
                              {errors.estado.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="35%" colspan="3">
                          <Input
                            label="Referência:"
                            id="referencia"
                            name="referencia"
                            placeholder="Ao lado da padaria"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) =>
                              setReferenciaDigitado(e.target.value)
                            }
                            ref={register("referencia", {
                              required: {
                                value: true,
                                message: "Informe um local de referência!",
                              },
                            })}
                          />
                          {errors.referencia && (
                            <p className={styles.errorMessages}>
                              {errors.referencia.message}
                            </p>
                          )}
                        </td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>
              <div id="section3" className={styles.secaoFormulario}>
                <h4>Contato e login:</h4>
                <div id="form_contato">
                  <Table
                    className={`table-bordered ${styles.tabela}`}
                    width="100%"
                    cellpadding="0"
                  >
                    <thead>
                      <tr>
                        <td width="50%">
                          <Input
                            label="E-mail:"
                            id="email"
                            name="email"
                            placeholder="email@email.com"
                            type="email"
                            outline={false}
                            height="40px"
                            onChange={(e) => setEmailDigitado(e.target.value)}
                            ref={register("email", {
                              required: {
                                value: true,
                                message: "Informe o seu Email!",
                              },
                            })}
                          />
                          {errors.email && (
                            <p className={styles.errorMessages}>
                              {errors.email.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Senha:"
                            id="senha"
                            name="senha"
                            placeholder="senha123"
                            type="password"
                            outline={false}
                            height="40px"
                            onChange={(e) => setSenhaDigitado(e.target.value)}
                            ref={register("senha", {
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
                          {errors.senha && (
                            <p className={styles.errorMessages}>
                              {errors.senha.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Confirmar e-mail:"
                            id="confemail"
                            name="confemail"
                            placeholder="email@email.com"
                            type="email"
                            outline={false}
                            height="40px"
                            onChange={(e) => setEmailDigitado(e.target.value)}
                            ref={register("confemail", {
                              required: {
                                value: true,
                                message: "Confirme o seu Email!",
                              },
                              equalTo: {
                                value: "#email",
                                message: "Os Emails devem ser iguais!",
                              },
                            })}
                          />
                          {errors.confemail && (
                            <p className={styles.errorMessages}>
                              {errors.confemail.message}
                            </p>
                          )}
                        </td>
                        <td width="50%">
                          <Input
                            label="Confirmar senha:"
                            id="confsenha"
                            name="confsenha"
                            placeholder="senha123"
                            type="Password"
                            outline={false}
                            height="40px"
                            onChange={(e) => setSenhaDigitado(e.target.value)}
                            ref={register("confsenha", {
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
                                value: "#senha",
                                message: "As Senhas devem ser iguais!",
                              },
                            })}
                          />
                          {errors.confsenha && (
                            <p className={styles.errorMessages}>
                              {errors.confsenha.message}
                            </p>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td width="50%">
                          <Input
                            label="Telefone:"
                            id="telefone"
                            name="telefone"
                            placeholder="(__)____-____"
                            type="text"
                            outline={false}
                            height="40px"
                            onChange={(e) => setCelularDigitado(e.target.value)}
                            ref={register("telefone", {
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
                          />{" "}
                          {errors.telefone && (
                            <p className={styles.errorMessages}>
                              {errors.telefone.message}
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
                            onChange={(e) =>
                              setCelular2Digitado(e.target.value)
                            }
                            ref={register("celular", {
                              required: {
                                value: true,
                                message: "Informe o seu celular!",
                              },
                              minLength: {
                                value: 10,
                                message: "Insira um calular válido!",
                              },
                              maxLength: {
                                value: 10,
                                message: "Insira um celular válido!",
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
                    </thead>
                  </Table>
                </div>
              </div>
              <div id="section4" className={styles.secaoFormulario}>
                <h4>Contato de emergência:</h4>

                <Table
                  className={`table-bordered ${styles.tabela}`}
                  width="100%"
                  cellpadding="0"
                >
                  <thead>
                    <tr>
                      <td width="50%">
                        <Input
                          label="Nome completo:"
                          id="nomeEmerg"
                          name="nomeEmerg"
                          placeholder="Jane Doe"
                          type="text"
                          outline={false}
                          height="40px"
                          onChange={(e) =>
                            setNomeContatoEmergencialDigitado(e.target.value)
                          }
                          ref={register("nomeEmerg", {
                            required: {
                              value: true,
                              message:
                                "Informe o nome do seu contato de emergência!",
                            },
                          })}
                        />
                        {errors.nomeEmerg && (
                          <p className={styles.errorMessages}>
                            {errors.nomeEmerg.message}
                          </p>
                        )}
                      </td>
                      <td width="50%">
                        <Input
                          label="E-mail:"
                          id="emailEmerg"
                          name="emailEmerg"
                          placeholder="email@email.com"
                          type="Email"
                          outline={false}
                          height="40px"
                          onChange={(e) =>
                            setEmailEmergencialDigitado(e.target.value)
                          }
                          ref={register("emailEmerg", {
                            required: {
                              value: true,
                              message:
                                "Informe o Email do seu contato de emergêcia!",
                            },
                          })}
                        />
                        {errors.emailEmerg && (
                          <p className={styles.errorMessages}>
                            {errors.emailEmerg.message}
                          </p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td width="50%">
                        <Input
                          label="Telefone:"
                          id="telefoneEmerg"
                          name="telefoneEmerg"
                          placeholder="(__)____-____"
                          type="text"
                          outline={false}
                          height="40px"
                          onChange={(e) =>
                            setTelefoneEmergencialDigitado(e.target.value)
                          }
                          ref={register("telefoneEmerg", {
                            required: {
                              value: true,
                              message:
                                "Informe o seu telefone do seu contato de emergência!",
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
                        {errors.telefoneEmerg && (
                          <p className={styles.errorMessages}>
                            {errors.telefoneEmerg.message}
                          </p>
                        )}
                      </td>
                      <td width="50%">
                        <Input
                          label="Confirmar e-mail:"
                          id="confemailEmerg"
                          placeholder="email@email.com"
                          type="Email"
                          outline={false}
                          height="40px"
                          onChange={(e) =>
                            setEmailEmergencialDigitado(e.target.value)
                          }
                          ref={register("confemailEmerg", {
                            required: {
                              value: true,
                              message:
                                "Confirme o email do seu contato de emergência",
                            },
                            equalTo: {
                              value: "#emailEmerg",
                              message: "Os Emails devem ser iguais!",
                            },
                          })}
                        />
                        {errors.confemailEmerg && (
                          <p className={styles.errorMessages}>
                            {errors.confemailEmerg.message}
                          </p>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td width="50%">
                        <Input
                          label="Celular:"
                          id="celularEmerg"
                          name="celularEmerg"
                          placeholder="(__)_____-____"
                          type="text"
                          outline={false}
                          height="40px"
                          onChange={(e) =>
                            setCelularEmergencialDigitado(e.target.value)
                          }
                          ref={register("celularEmerg", {
                            required: {
                              value: true,
                              message: "Informe o seu celular do seu contato de emergência!",
                            },
                            minLength: {
                              value: 10,
                              message: "Insira um celular válido!",
                            },
                            maxLength: {
                              value: 10,
                              message: "Insira um celuar válido!",
                            },
                            number: {
                              value: true,
                              message: "Insira apenas números!",
                            },
                          })}
                        />
                        {errors.celularEmerg && (
                          <p className={styles.errorMessages}>
                            {errors.celularEmerg.message}
                          </p>
                        )}
                      </td>
                    </tr>
                  </thead>
                </Table>
              </div>
              <div className={`row ${styles.botoes}`}>
                <div className="col">
                  <button
                    type="button"
                    className={styles.btnAnterior}
                    onclick="anterior()"
                  >
                    <Link to="/confirmarCadastro">Voltar</Link>
                  </button>
                </div>
                <div className={`col ${styles.btnProximoWrapper}`}>
                  <button type="submit" className={styles.btnProximo}>
                    Confirma
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterSec />
    </>
  );
}

export default CadastroVitima;
