package com.example.backend.arquivo;

import com.example.backend.dominio.Psicologo;
import com.example.backend.lista.ListaObj;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Formatter;
import java.util.FormatterClosedException;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class Arquivo {

    public static void gravaArquivoCsv (ListaObj<Psicologo> lista, String nomeArq) {
        FileWriter arq = null;     // objeto que representa o arquivo a ser gravado
        Formatter saida = null;    // objeto que usaremos para escrever no arquivo
        Boolean deuRuim = false;
        nomeArq += ".csv";         // acrescenta a extensão .csv ao nome do arquivo

        // Bloco try-catch para abrir o arquivo
        try {
            arq = new FileWriter(nomeArq,false);   // abre o arquivo nomeArq
            saida = new Formatter(arq);     // associa o objeto saida ao arquivo
        }
        catch (IOException erro){
            System.out.println("Erro ao abrir o arquivo");
            System.exit(1);
        }

        // Bloco try-catch para percorrer a lista e gravar no arquivo
        try {
            for (int i = 0; i < lista.getTamanho(); i++) {
                Psicologo p = lista.getElemento(i);
                saida.format("%s;%s;%s;%s;%s;%s\n",
                        p.getNome(),
                        p.getSenha(),
                        p.getEmail(),
                        p.getCelular(),
                        p.getTelefone1());
            }
        }
        catch (FormatterClosedException erro) {
            System.out.println("Erro ao gravar no arquivo");
            deuRuim = true;
        }
        finally {
            saida.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }

    public static void leExibeArquivoCsv (String nomeArq) {
        FileReader arq = null;  // objeto que representa o arquivo para leitura
        Scanner entrada = null; // objeto usado para ler do arquivo
        Boolean deuRuim = false;
        nomeArq += ".csv";

        // Bloco try-catch para abrir o arquivo
        try {
            arq = new FileReader(nomeArq);
            /* Cria o objeto do Scanner, informando que o delimitador é
               o ';' OU o '\n'  */
            entrada = new Scanner(arq).useDelimiter(";|\\n");
        }
        catch (FileNotFoundException erro) {
            System.out.println("Arquivo não encontrado");
            System.exit(1);
        }

        // Bloco try-catch para ler do arquivo
        try {
           // System.out.printf("%4s %-15s %-9s %5s\n", "ID", "NOME", "PORTE", "PESO");
            while (entrada.hasNext()) {  //enquanto não for final do arquivo
                String nome = entrada.next();
                String senha = entrada.next();
                String email = entrada.next();
                String celular = entrada.next();
                String telefone1 = entrada.next();
                String telefone2 = entrada.next();
                System.out.printf("%-9s %-9s %-9s %-9s %-9s %-9s\n",
                        nome,
                        senha,
                        email,
                        celular,
                        telefone1,
                        telefone2);
            }
        }
        catch (NoSuchElementException erro) {
            System.out.println("Arquivo com problemas");
            deuRuim = true;
        }
        catch (IllegalStateException erro) {
            System.out.println("Erro na leitura do arquivo");
            deuRuim = true;
        }
        finally {
            entrada.close();
            try {
                arq.close();
            }
            catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }

    }
}
