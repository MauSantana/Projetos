package com.example.backend.controle;


import com.example.backend.bot.SeguraBot;
import com.example.backend.dominio.Email;
import com.example.backend.dominio.Vitima;
import com.example.backend.lista.FilaObj;
import com.example.backend.lista.PilhaObj;
import com.example.backend.repository.ContatosEmergenciaisRepository;
import com.example.backend.repository.EmailRepository;
import com.example.backend.repository.EnderecoRepository;
import com.example.backend.repository.VitimaRepository;
import com.example.backend.slack.SlackMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/vitimas")
public class VitimaController {

    @Autowired
    private VitimaRepository repositoryVitima;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private ContatosEmergenciaisRepository contatosEmergenciaisRepository;
    @Autowired
    private EmailRepository emailRepository;

    //    CADASTRO DA VITIMA
    @PostMapping
    public ResponseEntity cadastrarUsuario(@RequestBody Vitima vitima) {

        if (vitima.getFilhosSN().equals(false)) {
            vitima.setFilhosSN(Boolean.valueOf("N"));
        } else if (vitima.getFilhosSN().equals(true)) {
            vitima.setFilhosSN(Boolean.valueOf("S"));
        }

        if (vitima.getMoraComParceiroSN().equals(false)) {
            vitima.setMoraComParceiroSN(Boolean.valueOf("N"));
        } else if (vitima.getMoraComParceiroSN().equals(true)) {
            vitima.setMoraComParceiroSN(Boolean.valueOf("S"));
        }

        enderecoRepository.save(vitima.getEndereco());

        vitima.getContatosEmergenciais()
                .forEach(contatosEmergenciaisRepository::save);


        repositoryVitima.save(vitima);

        return ResponseEntity.status(201).body(vitima);
    }

    //    PUXANDO TODOS
    @GetMapping
    public ResponseEntity exibirVitimas() {

        List<Vitima> vitimas = repositoryVitima.findAll();


        if (vitimas.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(vitimas);
    }

    //    ALTERANDO UM ATRIBUTO DA VITIMA
    @PutMapping("/{id}")
    public ResponseEntity putVitima(@PathVariable int id,
                                    @RequestBody Vitima vitimaAltarada) {
        if (repositoryVitima.existsById(id)) {
            vitimaAltarada.setNumeroDoCadastro(id);
            repositoryVitima.save(vitimaAltarada);
            return ResponseEntity.status(200).build();
        }

        return ResponseEntity.status(404).build();
    }

    //    PUXANDO APENAS UMA VITIMA
    @GetMapping("/{id}")
    public ResponseEntity getVitima(@PathVariable int id) {

        return ResponseEntity.of(repositoryVitima.findById(id));
    }


    // LOGIN DA VITIMA
    @GetMapping("/login/{email}/{senha}")
    public ResponseEntity login(@PathVariable String email, @PathVariable String senha) {

        List<Vitima> vitimas = repositoryVitima.findByEmailAndSenha(email, senha);

        if (vitimas.isEmpty()) {
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(repositoryVitima.findByEmailAndSenha(email, senha));
    }

    @GetMapping("/consulta/estouSendo/{nome}/{email}")
    public void estouSendoVitima(@PathVariable String nome, @PathVariable String email) {
        //intregaÃ§Ã£o com o slack onde o psicologo vai dar uma consulta para a vitima

        String msg = String.format("A usuaria: %s, do email: %s , esta sofrendo violencia domestica e gostaria de uma consulta.", nome, email);

        SlackMessage.messagemEstrouSendo(msg);


    }

    @GetMapping("/consulta/saberMais/{nome}/{email}")
    public void saberMais(@PathVariable String nome, @PathVariable String email) {

        String msg = String.format("A usuaria: %s, do email: %s , gostaria de saber mais do sobre o assunto violencia domestica.", nome, email);

        SlackMessage.messagemSaberMais(msg);

    }

    @GetMapping("/consulta/jaFui/{nome}/{email}")
    public void jaFui(@PathVariable String nome, @PathVariable String email) {
        String msg = String.format("A usuaria: %s, do email: %s , ja sofreu violencia domestica e gostaria de uma consulta.", nome, email);

        SlackMessage.messagemJaFoi(msg);
    }

    @GetMapping("/EstadoCivil/{moraComParceiro}")
    public ResponseEntity estadoCivil(Boolean moraComParceiro) {
        if (repositoryVitima.findByEstadoCivil(moraComParceiro) == null) {
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(200).body(repositoryVitima.findByEstadoCivil(moraComParceiro));
    }

    @PostMapping("/receber-autualizacao")
    public void receberAtualizacao(@RequestBody Email email) {
        FilaObj<String> filaObj = new FilaObj<>(10);

        filaObj.insert(email.getEmail());

//        int delay = 1000;   // delay de 5 seg.
//        int interval = 1000;  // intervalo de 1 seg.
//        Timer timer = new Timer();
        if (filaObj.isEmpty()){
            System.out.println("Fila vazia");
        }else {
            //timer.scheduleAtFixedRate(new TimerTask() {
               // public void run() {
                    SlackMessage.menssagemEmailRecebedi(filaObj.peek());
                    filaObj.poll();

               // }
           // }, delay, interval);
        }
    }


    @GetMapping("/receber-links")
    public ResponseEntity receberLinks() {
        PilhaObj<String> pilhaLink = new PilhaObj<>(100);
        List<String> listaLink = new ArrayList<>(100);

        pilhaLink.push(String.format("https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html \n https://brazil.unfpa.org/pt-br/news/entenda-os-tipos-de-violencia-contra-mulher-e-saiba-como-denunciar \n https://jornal.usp.br/atualidades/violencia-contra-a-mulher-vai-muito-alem-da-agressao-fisica/"));
        pilhaLink.push(String.format("https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html \n https://brazil.unfpa.org/pt-br/news/entenda-os-tipos-de-violencia-contra-mulher-e-saiba-como-denunciar \n https://jornal.usp.br/atualidades/violencia-contra-a-mulher-vai-muito-alem-da-agressao-fisica/"));
        pilhaLink.push(String.format("https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html \n https://brazil.unfpa.org/pt-br/news/entenda-os-tipos-de-violencia-contra-mulher-e-saiba-como-denunciar \n https://jornal.usp.br/atualidades/violencia-contra-a-mulher-vai-muito-alem-da-agressao-fisica/"));

        // pilhaLink.push("https://brazil.unfpa.org/pt-br/news/entenda-os-tipos-de-violencia-contra-mulher-e-saiba-como-denunciar");
        //  pilhaLink.push("https://jornal.usp.br/atualidades/violencia-contra-a-mulher-vai-muito-alem-da-agressao-fisica/");

        for (int i = 0; i < pilhaLink.tamanho(); i++) {
            listaLink.add(pilhaLink.pop());
        }


        if (pilhaLink.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(listaLink);
        }

    }

    @GetMapping("/mesagemAutoridades/{email}")
    public void mandarMenssagemAutoridades(@PathVariable String email) throws IOException, InterruptedException {
        Vitima vitima =  repositoryVitima.findByEmail(email);

        SeguraBot seguraBot = new SeguraBot();
//        String formattedString = localDate.format(formatter);

        String msg = String.format("Identificado uma possivel vitima pelo site Mulher Segura com os dados \n" +
                "Nome: %s \n" +
                "Cpf: %s \n" +
                "Rg: %s \n" +
                "Data nascimento: %s \n" +
                "Email: %s \n" +
                "Celular :%s \n" +
                "Rua : %s \n " +
                "Cidade: %s \n " +
                "Estado : %s \n" +
                "Bairro: %s", vitima.getNome(),vitima.getCpf(), vitima.getRg(), String.valueOf(vitima.getDataDeNascimento()), vitima.getEmail(), vitima.getCelular(), vitima.getEndereco().getRua(), vitima.getEndereco().getCidade(), vitima.getEndereco().getEstado(), vitima.getEndereco().getBairro());

        seguraBot.mensagemAutoridades(msg);
    }

}
