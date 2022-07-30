/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sysight;

import static br.com.sysight.TelaRecursos.delay;
import com.github.britooo.looca.api.core.Looca;
import java.time.LocalDateTime;
import java.util.concurrent.ThreadLocalRandom;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author natanista
 */
public class App {
    
    public static void main(String[] args) {
       App app = new App();
       
       app.rodarApp();
    }
    
    public void rodarApp(){
    while(true){
    inserirDados();
    System.out.println("Dados inseridos com sucesso!");
    delay(5000);
    }
    }
    
       public void inserirDados(){
       
        Conexao con = new Conexao();
        
        JdbcTemplate config = new JdbcTemplate(con.getDatasource());
        
        Looca looca = new Looca();
        Recurso recurso = new Recurso();
        
        LocalDateTime momento = recurso.getMomento();
        Double consumoRam = recurso.getConsumoRam();
        Double consumoCpu = recurso.getConsumoCPU();
        Double consumoDisco = recurso.getConsumoDisco();
       
        
        
    
        
        // Texto padrão para insert
        String insertStatement = "INSERT INTO RecursoConsumo (fkEquipamento, consumoRam, consumoCpu, consumoDisco, momento) VALUES (?, ?, ?, ?, ?)";
        
        // Utilizamos o comando "update" para inserir e/ou atualizar registros.
        // Podemos utilizar variavéis como o exemplo abaixo:
                //ALTERE A FK DE ACORDO COM SEU EQUIPAMENTO
       
        config.update(insertStatement, 1, consumoRam, consumoCpu, consumoDisco, momento);
         config.update(insertStatement, 2, consumoRam + gerarRandom(), consumoCpu + gerarRandom(), consumoDisco + gerarRandom(), momento);
          config.update(insertStatement, 3, consumoRam + gerarRandom(), consumoCpu + gerarRandom(), consumoDisco + gerarRandom(), momento);
           config.update(insertStatement, 4, consumoRam + gerarRandom(), consumoCpu + gerarRandom(), consumoDisco + gerarRandom(), momento);
            config.update(insertStatement, 5, consumoRam + gerarRandom(), consumoCpu + gerarRandom(), consumoDisco + gerarRandom(), momento);
             config.update(insertStatement, 6, consumoRam + gerarRandom(), consumoCpu + gerarRandom(), consumoDisco + gerarRandom(), momento);
             
      
    }
       
           
    public Double gerarRandom(){
    return ThreadLocalRandom.current().nextDouble(-5,5);
    }

    public App() {
        rodarApp();
    }
    
    
    
    
}
