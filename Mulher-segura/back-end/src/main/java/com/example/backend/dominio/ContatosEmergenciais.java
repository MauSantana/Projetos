package com.example.backend.dominio;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;


@Entity
@Table(name = "contatosemergenciais")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ContatosEmergenciais {

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contato_emergencial_id")
    private Integer contatoEmergencialID;

    @Column(name = "nome")
    @NotNull
    @NotEmpty
    @NotBlank
    private String nome;

//    @Column(name = "datadenascimento")
//    @DateTimeFormat(pattern = "dd/mm/yyyy")
//    private LocalDate dataDeNascimentoEmergencial;

    @Column(name = "email")
    private String email;

    @Column(name = "celular")
    private String celular;

    @Column(name = "telefone")
    private String telefone;

    /*@ManyToOne
    @JoinColumn(name = "numero_do_cadastro_vitima", referencedColumnName = "numero_do_cadastro")
    private Vitima vitima;*/


    //cosntrutores

/*    public ContatosEmergenciais(Integer contatoEmergencialID, String nome, String email, String celular, String telefone) {
        this.contatoEmergencialID = contatoEmergencialID;
        this.nome = nome;
        this.email = email;
        this.celular = celular;
        this.telefone = telefone;
    }*/

    public ContatosEmergenciais() {

    }
//metodos



    public Integer getContatoEmergencialID() {
        return contatoEmergencialID;
    }

    public void setContatoEmergencialID(Integer contatoEmergencialID) {
        this.contatoEmergencialID = contatoEmergencialID;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    /*public Vitima getVitima() {
        return vitima;
    }

    public void setVitima(Vitima vitima) {
        this.vitima = vitima;
    }*/

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }


}
