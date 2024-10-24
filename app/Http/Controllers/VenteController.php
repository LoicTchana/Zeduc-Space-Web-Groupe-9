<?php

namespace App\Http\Controllers;

use App\Models\vente;
use Illuminate\Http\Request;

class VenteController extends Controller
{
    public function index(){
        $vente = vente::getVente();
        return response()->json(['message'=>'Voici les ventes ', 'data'=>$vente]);
    }
}
