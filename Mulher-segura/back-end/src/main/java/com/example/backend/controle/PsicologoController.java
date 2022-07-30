package com.example.backend.controle;

import com.example.backend.arquivo.ArquivoTxt;
import com.example.backend.dominio.Psicologo;
import com.example.backend.dominio.Vitima;
import com.example.backend.lista.FilaObj;
import com.example.backend.lista.ListaObj;
import com.example.backend.lista.PilhaObj;
import com.example.backend.repository.PsicologoRepository;
import com.example.backend.slack.SlackMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/psicologos")
public class PsicologoController {


    @Autowired
    private PsicologoRepository repositoryPsicologo;


    // CADASTRO DO PSICOLOGO
    @PostMapping
    public ResponseEntity cadastrarPsiologo(@RequestBody Psicologo psicologo) {

        System.out.println(psicologo);
        repositoryPsicologo.save(psicologo);

        return ResponseEntity.status(201).build();
    }

    //    PUXANDO TODOS
    @GetMapping
    public ResponseEntity exibirPsicologos() {

        List<Psicologo> psicologos = repositoryPsicologo.findAll();
        ListaObj<Psicologo> psicologoObj = new ListaObj<Psicologo>(Math.toIntExact(repositoryPsicologo.count()));

        if (psicologos.isEmpty()) {
            return ResponseEntity.status(204).build();
        }

        for (int i = 0; i < repositoryPsicologo.count(); i++) {
            psicologoObj.adiciona(psicologos.get(i));

        }

        System.out.println(psicologoObj);
//        Arquivo.gravaArquivoCsv(psicologoObj, "psicologos");
        ArquivoTxt.gravaArquivoTxt(psicologos, "psicologos.txt");
        return ResponseEntity.status(200).body(psicologos);
    }

    //    ALTERANDO UM ATRIBUTO DO PSICOLOGO
    @PutMapping("/{id}")
    public ResponseEntity putPsicologo(@PathVariable int id,
                                    @RequestBody Psicologo psicologoAltarado) {
        if (repositoryPsicologo.existsById(id)) {
            psicologoAltarado.setNumeroDoCadastroPsicologo(id);
            repositoryPsicologo.save(psicologoAltarado);
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }

    //    PUXANDO APENAS UM PSICOLOGO
    @GetMapping("/{id}")
    public ResponseEntity getPsicologo(@PathVariable int id) {

        return ResponseEntity.of(repositoryPsicologo.findById(id));
    }


    @GetMapping("/login/{userName}/{senha}")
    public ResponseEntity login(@PathVariable String userName, @PathVariable String senha) {

        List<Psicologo> psicologos = repositoryPsicologo.findByUsernameAndSenha(userName, senha);

        if (psicologos.isEmpty()) {
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(psicologos);

    }


    @PostMapping("/consulta/{nome}/{email}/{msg}")
    public void fazerConsulta(@PathVariable String msg, @PathVariable String nome, @PathVariable String email) {
        //intregação com o slack onde o psicologo vai dar uma consulta para a vitima

        PilhaObj pilha = new PilhaObj(3);

        pilha.push(nome);
        pilha.push(email);
        pilha.push(msg);

        String consulta = "";

        for (int i = 0; i < pilha.tamanho(); i++) {

            consulta += pilha.peek();
            pilha.pop();
        }

        SlackMessage.messagemSaberMais(consulta);


    }





    @GetMapping("/lerAquivo")
    public void leAquivoTxt() {

        ArquivoTxt.leArquivoTxt("psicologos.txt");
    }


}