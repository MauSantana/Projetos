package com.example.backend.controle;


import com.example.backend.repository.ContatosEmergenciaisRepository;
import com.example.backend.repository.VitimaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/contato")
public class ContatosEmergenciaisController {

    @Autowired
    private ContatosEmergenciaisRepository contatosEmergenciaisRepository;
    @Autowired
    private VitimaRepository vitimaRepository;

}
