<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AiController extends Controller
{
    function chat(Request $req){
    $client = new Client();
    $parameters = $req->all();
    
    $response = $client->post("https://innovatex.azurewebsites.net/chat", [
        "json" => $parameters,
    ]);
    $data = json_decode($response->getBody(), true);
    return $data;
    }

    function quiz(Request $req){
        $client = new Client();
        $parameters = $req->all();
        $response = $client->post("https://innovatex.azurewebsites.net/quiz", [
            "json" => $parameters,
         ]);
         $data = json_decode($response->getBody(), true);
         return $data;
    }

    function questions(Request $req){
        $client = new Client();
        $parameters = $req -> all();
        $response = $client->post("https://innovatex.azurewebsites.net/question", [
            "json" => $parameters, 
        ]);
        $data = json_decode($response->getBody(), true);
        return $data;
    }

    function podcast(Request $req){
        $client = new Client();
        $parameters = $req -> all();
        $response = $client->post("https://innovatex.azurewebsites.net/podcast", [
            "json" => $parameters, 
        ]);
        $data = json_decode($response->getBody(), true);
        return $data;
    }

    function rpaper(Request $req){
        $client = new Client();
        $parameters = $req -> all() ;
        $response = $client->post("https://innovatex.azurewebsites.net/rpaper", [
            "json" => $parameters, 
        ]);
        $data = json_decode($response->getBody(), true);
        return $data ;
    }

    function loog(Request $req){
        $client = new Client();
        $parameters = $req -> all();
        $response = $client->post("https://innovatex.azurewebsites.net/rpaper", [
            "json" => $parameters, 
        ]);
        $data = json_decode($response->getBody(), true);
        return $data;
    }
}
