package com.example.backend.repository;

import com.example.backend.dominio.Email;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Email,Integer> {
}
