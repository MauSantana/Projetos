package com.example.backend.controle;


import com.example.backend.repository.EnderecoRepository;
import com.example.backend.repository.VitimaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
@CrossOrigin("*")
@RestController
@RequestMapping("/endereco")
public class EnderecoController {


    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private VitimaRepository vitimaRepository;



}
