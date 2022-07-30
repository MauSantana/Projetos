package com.example.backend.dominio;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "endereco")
public class Endereco {

    //atributos

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rua_id")
    private Integer ruaId;

    @Column(name = "cep")
    private String cep;

    @Column(name = "numero_da_casa")
    private String numeroDaCasa;

    @Column(name = "rua")
    private String rua;

    @Column(name = "complemento")
    private String complemento;

    @Column(name = "referencia")
    private String referencia;

    @Column(name = "cidade")
    private String cidade;

    @Column(name = "estado")
    private String estado;

    @Column(name = "bairro")
    private String bairro;


    //cosntrutores

    public Endereco() {
    }


    //metodos


    public Integer getRuaId() {
        return ruaId;
    }

    public void setRuaId(Integer ruaId) {
        this.ruaId = ruaId;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getNumeroDaCasa() {
        return numeroDaCasa;
    }

    public void setNumeroDaCasa(String numeroDaCasa) {
        this.numeroDaCasa = numeroDaCasa;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

}
