package com.example.backend;

import com.example.backend.bot.SeguraBot;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.telegram.telegrambots.meta.TelegramBotsApi;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;
import org.telegram.telegrambots.updatesreceivers.DefaultBotSession;

import java.io.IOException;

@SpringBootApplication
public class LoginApplication {

    public static void main(String[] args) throws IOException, InterruptedException {
        SpringApplication.run(LoginApplication.class, args);

    /*    try {
            TelegramBotsApi telegramBotsApi = new TelegramBotsApi(DefaultBotSession.class);
            telegramBotsApi.registerBot(new SeguraBot());
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }*/

    }

}
