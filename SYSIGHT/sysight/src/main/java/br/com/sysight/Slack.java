package br.com.sysight;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.JSONObject;

public class Slack {
    private static HttpClient client = HttpClient.newHttpClient();
    private static final String URL = "https://hooks.slack.com/services/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";
    
    public static void enviarMensagem(JSONObject content) throws IOException, InterruptedException{
        HttpRequest request = HttpRequest.newBuilder(
                URI.create(URL).create(URL).create(URL))
                .header("accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(content.toString()))
                .build();
        
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        
        System.out.println(String.format("Status: %s", response.statusCode()));
        System.out.println(String.format("Response: %s", response.body()));
    }
}
