package com.example.backend.dominio;

import jdk.jfr.BooleanFlag;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.util.List;

@Entity
@Table(name = "vitima")
public class Vitima extends Usuario {
    // Atributos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "numero_do_cadastro")
    private Integer numeroDoCadastro;

    @Column(name = "celular")
    private String celular;

    @Column(name = "celular2")
    private String celular2;

    @Column(name = "filhos_s_n")
    private Boolean filhosSN;

    @Column(name = "quantidadefilhos")
    private Integer quantidadeDeFilhos;

    @Column(name = "estadocivil")
    private String estadoCivil;

    @Column(name = "mora_com_parceiro_s_n")
    private Boolean moraComParceiroSN;

    @Column(name = "nome_do_parceiro")
    private String nomeDoParceiro;

    @OneToOne
    @JoinColumn(name = "rua_endereco", referencedColumnName = "rua_id")
    private final Endereco endereco = null;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "numero_do_cadastro_vitima")
    private List<ContatosEmergenciais> contatosEmergenciais;

    //Constrtores

    public Vitima() {
        super();

    }


    // metodos


    public void setContatosEmergenciais(List<ContatosEmergenciais> contatosEmergenciais) {
        this.contatosEmergenciais = contatosEmergenciais;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public List<ContatosEmergenciais> getContatosEmergenciais() {
        return contatosEmergenciais;
    }

    public String fazerBoletin(Vitima V) {
        return String.format("Denuncia enviada!! \n Numero da ocorrencia enviado para o email:" + super.getEmail());
    }

    public Integer getNumeroDoCadastro() {
        return numeroDoCadastro;
    }

    public void setNumeroDoCadastro(Integer numeroDoCadastro) {
        this.numeroDoCadastro = numeroDoCadastro;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getCelular2() {
        return celular2;
    }

    public void setCelular2(String celular2) {
        this.celular2 = celular2;
    }

    public Boolean getFilhosSN() {
        return filhosSN;
    }

    public void setFilhosSN(Boolean filhosSN) {
        this.filhosSN = filhosSN;
    }

    public Integer getQuantidadeDeFilhos() {
        return quantidadeDeFilhos;
    }

    public void setQuantidadeDeFilhos(Integer quantidadeDeFilhos) {
        this.quantidadeDeFilhos = quantidadeDeFilhos;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public Boolean getMoraComParceiroSN() {
        return moraComParceiroSN;
    }

    public void setMoraComParceiroSN(Boolean moraComParceiroSN) {
        this.moraComParceiroSN = moraComParceiroSN;
    }

    public String getNomeDoParceiro() {
        return nomeDoParceiro;
    }

    public void setNomeDoParceiro(String nomeDoParceiro) {
        this.nomeDoParceiro = nomeDoParceiro;
    }
}
