<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use Illuminate\Http\Request;

class EmployeController extends Controller
{
    public function index(){
        $employes = Employe::all();
        return response()->json($employes);
    }

    public function store(Request $request){

        $request->validate([
            'nom_employe' => 'required|string|max:255',
            'email_employe' => 'required|string|email|max:255|unique:employes',
            'mot_de_passe_employe' => 'required|string|min:8',
        ]);

        $employes=employe::create([
            'nom_employe'=>$request->nom_employe,
            'email_employe'=>$request->email_employe,
            'date_embauche'=>now(),
            'mot_de_passe_employe'=>$request->mot_de_passe_employe
        ]);
        return response()->json($employes,201);
    }

    public function destroy(Request $request, $id_employe){

        $result = employe::deletEmploye($id_employe);

        if($result){
            return response()->json(['message'=>'Employe supprime avec succes'],201);
        }
        else{
            return response()->json(['error'=>'Erreur lors de la suppression verifiez si les identifiants sont correctes'],401);
        }
    }
}
