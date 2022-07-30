package com.example.backend.repository;

import com.example.backend.dominio.ContatosEmergenciais;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatosEmergenciaisRepository extends JpaRepository<ContatosEmergenciais, Integer> {
}