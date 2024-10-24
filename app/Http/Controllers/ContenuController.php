<?php

namespace App\Http\Controllers;

use App\Models\contenu;
use Illuminate\Http\Request;

class ContenuController extends Controller
{
    public function showContenu($id_commande){

        $contenu = Contenu::find($id_commande);
        return response()->json(['message'=>'Voici le contenu de la commande','contenu'=>$contenu]);
    }
}
