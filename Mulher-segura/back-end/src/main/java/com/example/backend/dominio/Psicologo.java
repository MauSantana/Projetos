package com.example.backend.dominio;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Psicologo extends Usuario {

    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "numero_do_cadastro_psicologo")
    private Integer numeroDoCadastroPsicologo;

    @Column(name = "celular")
    private String celular;

    @Column(name = "telefone1")
    private String telefone1;

 /*   @Column(name = "telefone2")
    private String telefone2;*/

    @Column(name = "numero_do_crp")
    private String numeroDoCrp;


    //Construtor


    public Psicologo() {
        super();
    }


    @Override
    public String toString() {
        return "Psicologo{" +
                "numeroDoCadastroPsicologo=" + numeroDoCadastroPsicologo +
                ", celular='" + celular + '\'' +
                ", telefone1='" + telefone1 + '\'' +
//                ", telefone2='" + telefone2 + '\'' +
                ", numeroDoCrp='" + numeroDoCrp + '\'' +
                '}';
    }

    public Integer getNumeroDoCadastroPsicologo() {
        return numeroDoCadastroPsicologo;
    }

    public void setNumeroDoCadastroPsicologo(Integer numeroDoCadastroPsicologo) {
        this.numeroDoCadastroPsicologo = numeroDoCadastroPsicologo;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getTelefone1() {
        return telefone1;
    }

    public void setTelefone1(String telefone1) {
        this.telefone1 = telefone1;
    }

    /*public String getTelefone2() {
        return telefone2;
    }

    public void setTelefone2(String telefone2) {
        this.telefone2 = telefone2;
    }*/

    public String getNumeroDoCrp() {
        return numeroDoCrp;
    }

    public void setNumeroDoCrp(String numeroDoCrp) {
        this.numeroDoCrp = numeroDoCrp;
    }
}

