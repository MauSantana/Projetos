
package br.com.sysight;


import com.github.britooo.looca.api.core.Looca;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

public class Equipamento {

    private String hostName;
    private String sistema;
    private String memoria;
    private String temperatura;
    private String processador;
    private Looca looca = new Looca();
    private Recurso recurso;
    private String discos;

 
    public Equipamento() throws UnknownHostException {
        this.sistema = looca.getSistema().toString();
        this.memoria = looca.getMemoria().toString();
        this.temperatura = looca.getTemperatura().getTemperatura().toString();
        this.processador = looca.getProcessador().toString();
        this.recurso = new Recurso();
        this.discos = looca.getGrupoDeDiscos().getDiscos().toString();
        this.hostName = InetAddress.getLocalHost().getHostName();
                  
    }
    
    public String getHostName() {
        return hostName;
    }

    public String getSistema() {
        return sistema;
    }

    public String getMemoria() {
        return memoria;
    }

    public String getTemperatura() {
        return temperatura;
    }

    public String getProcessador() {
        return processador;
    }

    public Recurso getRecurso() {
        return recurso;
    }

    public String getDiscos() {
        return discos;
    }
    
    

    

 

}
