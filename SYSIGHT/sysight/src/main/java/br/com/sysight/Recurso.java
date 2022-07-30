package br.com.sysight;

import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.group.processador.Processador;
import com.github.britooo.looca.api.group.servicos.Servico;
import com.github.britooo.looca.api.group.servicos.ServicosGroup;
import com.github.britooo.looca.api.group.temperatura.Temperatura;
import com.sun.jna.platform.win32.Sspi;
import com.sun.jna.platform.win32.Sspi.TimeStamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;


public class Recurso {

    Looca looca = new Looca();

    private String momento;
    private String consumoRam;
    private Double consumoCpu;
    private String consumoDisco;

    public Recurso() {
        this.consumoRam = looca.getMemoria().getEmUso().toString();
        this.consumoCpu = looca.getProcessador().getUso();
        this.consumoDisco = looca.getGrupoDeDiscos().getDiscos().toString();
    
    }

    public LocalDateTime getMomento() {
         LocalDateTime now = LocalDateTime.now();
            return now;
    }

 

    public Double getConsumoRam() {
        Long ramTotal = looca.getMemoria().getTotal();
        Long ramDisponivel = looca.getMemoria().getDisponivel();
        Double percentualMemoriaEmUso = (double) (ramTotal - ramDisponivel) / ramTotal * 100;
        return percentualMemoriaEmUso;
    }

 

    public Double getConsumoDisco() {
        Long discoTotal = looca.getGrupoDeDiscos().getVolumes().get(0).getTotal();
        Long discoDisponivel = looca.getGrupoDeDiscos().getVolumes().get(0).getDisponivel();
        Double percentualDiscoEmUso = (double) (discoTotal - discoDisponivel) / discoTotal * 100;
        return percentualDiscoEmUso;
    }
    
    public Double getConsumoCPU() {
        return this.consumoCpu;
    }
    
 
    @Override
    public String toString() {
        return String.format("Recursos da Maquina: \n"
                           + "Data e Hora: \n" + momento
                           + "Consumo RAM: %s\n"
                           + "Consumo CPU: %s\n"
                           + "Consumo Discos: %s",
                           looca.getMemoria(),
                           looca.getProcessador(),
                           looca.getGrupoDeDiscos().getDiscos());
    }    
}
