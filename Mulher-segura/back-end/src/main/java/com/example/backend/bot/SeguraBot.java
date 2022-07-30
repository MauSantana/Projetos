package com.example.backend.bot;

import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import javax.ws.rs.core.UriBuilder;
import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.Date;

public class SeguraBot extends TelegramLongPollingBot {
    @Override
    public String getBotUsername() {
        return DadosBot.BOT_USER_NAME;
    }

    @Override
    public String getBotToken() {
        return DadosBot.BOT_TOKEN;
    }

    @Override
    public void onUpdateReceived(Update update) {

        if (update.hasMessage() && update.getMessage().hasText()) {
            var mensagem = responder(update);
            try {
                execute(mensagem);
            } catch (TelegramApiException e) {
                e.printStackTrace();
            }
        }
    }

    private SendMessage responder(Update update) {
        String textoMensagem = update.getMessage().getText().toLowerCase();
        String chatId = update.getMessage().getChatId().toString();

        String resposta = "";

        if ("data".equals(textoMensagem)) {

            resposta = getData();
        } else if (textoMensagem.startsWith("/data")) {

            resposta = getHora();
        } else if (textoMensagem.startsWith("ola") || textoMensagem.startsWith("olá") || textoMensagem.startsWith("oi")) {
            resposta = "Olá, eu sou o bot para o projeto Mulher Segura \uD83E\uDD16";

        } else if (textoMensagem.startsWith("/quem_e_voce")) {

            resposta = "Eu sou o bot \uD83E\uDD16 para o projeto Mulher Segura";
        } else if (textoMensagem.startsWith("/help")) {

            resposta = "Utilize um dos comandos ✅:\n \n /data\n /hora\n /origem \n /quem_e_voce";
        } else if (textoMensagem.startsWith("/origem")) {

            resposta = "Fui criado para o projeto Mulher Segura\uD83D\uDE0A, que visa agilizar o atendimento para vitimas de violencia domentica";
        } else {
            resposta = "Não entendi! \uD83D\uDE15 \n Digite /help para ver os comandos disponíveis.";

        }

        return SendMessage.builder()
                .text(resposta)
                .chatId(chatId)
                .build();
    }

    public void mensagemAutoridades(String mensagem) throws IOException, InterruptedException {


        final String CHAT_ID = "2140124894";

        HttpClient client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(5))
                .version(HttpClient.Version.HTTP_2)
                .build();

        UriBuilder builder = UriBuilder

                .fromUri("https://api.telegram.org")
                .path("/{token}/sendMessage")
                .queryParam("chat_id", CHAT_ID)
                .queryParam("text", mensagem);

        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(builder.build("bot" + getBotToken()))
                .timeout(Duration.ofSeconds(5))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.statusCode());
        System.out.println(response.body());
    }

    private String getData() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        return "A data atual é: " + formatter.format(new Date());
    }

    private String getHora() {
        SimpleDateFormat formatter = new SimpleDateFormat("HH:mm:ss");
        return "A hora atual é: " + formatter.format(new Date());
    }

}
