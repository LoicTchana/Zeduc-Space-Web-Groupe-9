<?php

namespace App\Http\Controllers;

use App\Models\reclamation;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class ReclamationController extends Controller
{
    public function index(){
        $reclamations = reclamation::getAllReclamations();
        return response()->json($reclamations);
    }
    public function store(Request $request){

        $request->validate([
            'libelle_reclamation' => 'required|string|max:3000',
        ]);

        $user = auth()->user();

        $reclamation = reclamation::create([
            'id_utilisateur' => $user->id_utilisateur,
            'libelle_reclamation'=>$request->libelle_reclamation,
            'date_reclamation'=>now(),
        ]);
        return response()->json(['message'=>'Votre reclamation a été enregistrer et sera prise en charge','reclamation'=>$reclamation]);

    }
}
