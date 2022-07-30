package com.example.backend.repository;

import com.example.backend.dominio.Psicologo;
import com.example.backend.dominio.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PsicologoRepository extends JpaRepository<Psicologo, Integer> {

    List<Psicologo> findByUsernameAndSenha(String userName, String senha);

}
