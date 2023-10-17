<?php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
 
    Public function register(Request $req){
        $this -> validate($req,[
            "nameorEmail" => ['required','email'],
            "password" => ['required','min:3'],
        ]);

        $user = User::create($req -> all());

        return "User registered successfully";
    }

    Public function loginuser(){
        return "Hello world";
    }
}
