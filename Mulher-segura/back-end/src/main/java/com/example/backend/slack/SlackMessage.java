package com.example.backend.slack;

import com.example.backend.dominio.Email;
import org.json.JSONObject;
public class SlackMessage {


    public static void messagemSaberMais(String email) {
        SlackConnetion slack = new SlackConnetion();
        JSONObject json = new JSONObject();

        slack.setUrl("https://hooks.slack.com/services/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");

        try {
            json.put("text", email);
            slack.sendMessage(json);
        } catch (Exception erro) {
            System.err.println(erro);
        }
    }

    public static void messagemEstrouSendo(String mensagem) {
        SlackConnetion slack = new SlackConnetion();
        JSONObject json = new JSONObject();

        slack.setUrl("https://hooks.slack.com/services/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");

        try {
            json.put("text", mensagem);
            slack.sendMessage(json);
        } catch (Exception erro) {
            System.err.println(erro);
        }
    }

    public static void messagemJaFoi(String mensagem) {
        SlackConnetion slack = new SlackConnetion();
        JSONObject json = new JSONObject();

        slack.setUrl("https://hooks.slack.com/services/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");

        try {
            json.put("text", mensagem);
            slack.sendMessage(json);
        } catch (Exception erro) {
            System.err.println(erro);
        }
    }

    public static void menssagemEmailRecebedi(String email){
        SlackConnetion slack = new SlackConnetion();
        JSONObject json = new JSONObject();

        slack.setUrl("https://hooks.slack.com/services/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");

        try {
            json.put("text", email);
            slack.sendMessage(json);
        } catch (Exception erro) {
            System.err.println(erro);
        }
    }
}
