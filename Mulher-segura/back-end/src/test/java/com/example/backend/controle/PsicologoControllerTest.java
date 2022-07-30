package com.example.backend.controle;

import com.example.backend.dominio.Psicologo;
import com.example.backend.repository.PsicologoRepository;
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

@SpringBootTest(classes = {PsicologoController.class, PsicologoController.class})
class PsicologoControllerTest {

    @Autowired
    PsicologoController controller;

    @MockBean
    PsicologoRepository repository;

    @Test
    void getDeveRetornarStatus204SemCorpo_seSemPsicologo() {

        when(repository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity resposta = controller.exibirPsicologos();

        assertEquals(204, resposta.getStatusCodeValue());

        assertNull(resposta.getBody());
    }

    @Test
    void getDeveRetornarStatus200ComCorpo_seHaPsicologo() {

        List<Psicologo> listaPsicologoMock = List.of(mock(Psicologo.class), mock(Psicologo.class));
        when(repository.findAll()).thenReturn(listaPsicologoMock);

        ResponseEntity resposta = controller.exibirPsicologos();

        assertEquals(200, resposta.getStatusCodeValue());

        assertEquals(listaPsicologoMock, resposta.getBody());
    }


    @Test
    void getIdDeveRetornarStatus404SemCorpo_seIdNaoExiste() {

        Integer idTeste = 900;

        when(repository.findById(idTeste)).thenReturn(Optional.empty());

        ResponseEntity resposta = controller.getPsicologo(idTeste);

        assertEquals(404, resposta.getStatusCodeValue());

        assertNull(resposta.getBody());
    }

    @Test
    void getIdDeveRetornarStatus200ComCorpo_seIdNaoExiste() {

        Integer idTeste = 900;
        Psicologo psicologoMock = mock(Psicologo.class);

        when(repository.findById(idTeste)).thenReturn(Optional.of(psicologoMock));

        ResponseEntity resposta = controller.getPsicologo(idTeste);

        assertEquals(200, resposta.getStatusCodeValue());

        assertEquals(psicologoMock, resposta.getBody());
    }

    @Test
    void postCadastrarPsiologoDeveRetornarStatus201(){
        Psicologo psicologo = new Psicologo();
        ResponseEntity response = controller.cadastrarPsiologo(psicologo);
        assertEquals(201, response.getStatusCodeValue());
    }




}