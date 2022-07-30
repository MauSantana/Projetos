package com.example.backend.arquivo;

import com.example.backend.dominio.Psicologo;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ArquivoTxt {

    public static void gravaRegistro(String registro, String nomeArq) {
        BufferedWriter saida = null;

        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();
        } catch (IOException erro) {
            System.out.println("Erro ao gravar no arquivo: " + erro.getMessage());
        }
    }

    public static void gravaArquivoTxt(List<Psicologo> lista, String nomeArq) {
        int contaRegDados = 0;

        String header = "00PSICOLOGOS20212";
        Date dataDeHoje = new Date();
        SimpleDateFormat formataData = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        header += formataData.format(dataDeHoje);
        header += "01";

        gravaRegistro(header, nomeArq);

        for (Psicologo p : lista) {
            String corpo = "02";
            corpo += String.format("%-60s ", p.getNome());
            corpo += String.format("%11s ", p.getCpf());
            corpo += String.format("%-40s ", p.getEmail());
            corpo += String.format("%11s ", p.getTelefone1());
//            corpo += String.format("%11s ", p.getTelefone2());
            corpo += String.format("%15s ", p.getNumeroDoCrp());



         /*   corpo += String.format("%-20.20s ", p.getNome());
            corpo += String.format("%11.11s ", p.getCpf());
            corpo += String.format("%-20.20s ", p.getEmail());
            corpo += String.format("%11.11s ", p.getTelefone1());
            corpo += String.format("%11.11s ", p.getTelefone2());
            corpo += String.format("%15.15s ", p.getNumeroDoCrp());*/



            contaRegDados++;
            gravaRegistro(corpo, nomeArq);
        }
        String trailer = "01";
        trailer += String.format("%010d", contaRegDados);
        gravaRegistro(trailer, nomeArq);

    }

    public static void leArquivoTxt(String nomeArq) {
        BufferedReader entrada = null;
        String registro, tipoRegistro;
        String nome, cpf, email, telefone1, telefone2, numeroCrp;
        int qtdRegistrosGravados;

        List<Psicologo> listaLida = new ArrayList();

        try {
            entrada = new BufferedReader(new FileReader(nomeArq));
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo: " + erro.getMessage());
        }

        try {
            registro = entrada.readLine();

            while (registro != null) {
                tipoRegistro = registro.substring(0, 2);
                Psicologo p = new Psicologo();
                if (tipoRegistro.equals("00")) {
                    System.out.println("É um registro de header!");
                    System.out.println("Tipo de registo: " + registro.substring(1, 2));
                    System.out.println("Tipo de arquivo: " + registro.substring(2, 18));
                    System.out.println("Data/hora de gravação: " + registro.substring(17, 36));

                } else if (tipoRegistro.equals("01")) {

                    System.out.println("É um registro de trailer");
                    qtdRegistrosGravados = Integer.valueOf(registro.substring(2, 12));

                    if (qtdRegistrosGravados == listaLida.size()) {

                        System.out.println("Quantidade de registros gravados compatível com quantidade lida");
                    } else {

                        System.out.println("Quantidade de registros gravados não confere com quantidade lida");
                    }
                } else if (tipoRegistro.equals("02")) {

                    System.out.println("É um registro de corpo!");
                    p.setNome(registro.substring(3, 62).trim());
                    p.setCpf(registro.substring(63, 74));
                    p.setEmail(registro.substring(74, 114).trim());
                    p.setNumeroDoCrp(registro.substring(136, 151).trim());
//                    numeroCrp = registro.substring(136, 151).trim();

                    listaLida.add(p);
                    //contaRegDados++;
                } else {
                    System.out.println("Tipo de registro inválido!");
                }

                if (tipoRegistro.equals("03")) {
                    p.setTelefone1(registro.substring(114, 125).trim());
//                    p.setTelefone2(registro.substring(125, 136).trim());
                }
                registro = entrada.readLine();

            }
            entrada.close();
        } catch (IOException erro) {
            System.out.println("Erro ao ler o arquivo: " + erro.getMessage());
        }

        System.out.println("\n Conteúdo lido do arquivo:");

        for (Psicologo p : listaLida) {
            System.out.println(p);
        }
    }

}
