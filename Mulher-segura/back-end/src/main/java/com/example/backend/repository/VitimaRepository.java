package com.example.backend.repository;

import com.example.backend.dominio.Vitima;
import com.example.backend.lista.FilaObj;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VitimaRepository extends JpaRepository<Vitima, Integer> {

    List<Vitima> findByEmailAndSenha(String email, String senha);

    Vitima findByEmail(String email);

    @Query("select v.email from vitima v where v.mora_com_parceiro_s_n = ?1")
    default FilaObj findByEstadoCivil(Boolean moraComParceiro) {
        return null;
    }


}
