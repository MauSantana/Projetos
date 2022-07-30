package com.example.backend.lista;

public class ListaObj<T> {

    private T[] vetor;
    private Integer nroElem;

    // Construtor

    public ListaObj(Integer tamanho) {
        this.vetor = (T[]) new Object[tamanho];
        this.nroElem = 0;
    }
// Métodos

    public Boolean adiciona(T elemento) {

        if (nroElem >= vetor.length) {
            System.out.println("Lista está cheia");
            return false;
        }
        vetor[nroElem++] = elemento;
        return true;
    }

    public void exibe() {

        if (nroElem == 0) {
            System.out.println("\n Lista está vazia.");
        } else {
//            System.out.println("\n Elemento da lista:");

            for (int i = 0; i < nroElem; i++) {
                System.out.println(vetor[i]);
            }
            System.out.println();
        }
    }

    public int busca(T elementoBuscado) {
        for (int i = 0; i < nroElem; i++) {
            if (vetor[i].equals(elementoBuscado)) {
                return i;
            }
        }
        return -1;
    }


    public Boolean removePeloIndice(int indice) {
        if (indice < 0 || indice >= nroElem) {
            System.out.println("\n Índice invalido !");
            return false;
        }
        //Loop para deslocar para a esquerda , os elemneto do vetor
        // sobrescrevendo o elemento removido
        for (int i = indice; i < nroElem - 1; i++) {
            vetor[i] = vetor[i + 1];
        }
        nroElem--;
        return true;
    }

    public boolean removeElemento(T elementoRemover) {
        return removePeloIndice(busca(elementoRemover));
    }

    public Integer getTamanho() {
        return nroElem;
    }


    public T getElemento(int id) {
        if (id < 0 || id >= nroElem) {
            return null;
        } else {
            return vetor[id];
        }
    }


    public void limpar() {
        nroElem = 0;
    }


    public T[] getVetor() {
        return vetor;
    }

    public Integer getNroElem() {
        return nroElem;
    }
}