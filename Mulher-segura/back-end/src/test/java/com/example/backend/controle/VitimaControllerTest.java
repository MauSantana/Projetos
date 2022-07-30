package com.example.backend.controle;

import com.example.backend.dominio.ContatosEmergenciais;
import com.example.backend.dominio.Endereco;
import com.example.backend.dominio.Psicologo;
import com.example.backend.dominio.Vitima;
import com.example.backend.repository.ContatosEmergenciaisRepository;
import com.example.backend.repository.EnderecoRepository;
import com.example.backend.repository.VitimaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class VitimaControllerTest {

    @Autowired
    VitimaController controller;
    @Autowired
    EnderecoController controllerEndereco;
    @Autowired
    ContatosEmergenciaisController controlerContatosEmergenciais;
    @MockBean
    VitimaRepository repository;
    @MockBean
    EnderecoRepository repositoryEndereco;
    @MockBean
    ContatosEmergenciaisRepository repositoryContatosEmergenciais;

    @Test
    void getDeveRetornarStatus204SemCorpo_seSemVitima() {

//        when(repositoryEndereco.findAll()).thenReturn(new ArrayList<>());
//        when(repositoryContatosEmergenciais.findAll()).thenReturn(new ArrayList<>());
        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.exibirVitimas();

        assertEquals(204, resposta.getStatusCodeValue());

        //assertNull(resposta.getBody());
    }

    @Test
    void getDeveRetornarStatus200ComCorpo_seHaVitima() {

        List<Vitima> listaVitimaMock = List.of(mock(Vitima.class), mock(Vitima.class));
        when(repository.findAll()).thenReturn(listaVitimaMock);

        ResponseEntity resposta = controller.exibirVitimas();

        assertEquals(200, resposta.getStatusCodeValue());

        assertEquals(listaVitimaMock, resposta.getBody());
    }


    @Test
    void getIdDeveRetornarStatus404SemCorpo_seIdNaoExiste() {

        Integer idTeste = 900;

        when(repository.findById(idTeste)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getVitima(idTeste);

        assertEquals(404, resposta.getStatusCodeValue());

        assertNull(resposta.getBody());
    }

    @Test
    void getIdDeveRetornarStatus200ComCorpo_seIdNaoExiste() {

        Integer idTeste = 900;
        Vitima vitimaMock = mock(Vitima.class);

        when(repository.findById(idTeste)).thenReturn(Optional.of(vitimaMock));

        ResponseEntity resposta = controller.getVitima(idTeste);

        assertEquals(200, resposta.getStatusCodeValue());

        assertEquals(vitimaMock, resposta.getBody());
    }

    @Test
    void postCadastrarVitimaDeveRetornarStatus201(){
        Vitima vitima = mock(Vitima.class);

        ResponseEntity response = controller.cadastrarUsuario(vitima);
        assertEquals(201, response.getStatusCodeValue());
    }

}