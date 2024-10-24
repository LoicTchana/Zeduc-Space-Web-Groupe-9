<?php

namespace App\Http\Controllers;

use App\Models\parrainage;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class utilisateurController extends Controller
{
    // Récupérer tous les utilisateurs
    public function index()
    {
        // Appel de la méthode getAll() du modèle
        $utilisateurs = Utilisateur::getAll();
        return response()->json($utilisateurs);
    }

    // Création d'un nouvel utilisateur
    public function store(Request $request)
    {
        // Validation des données
        $request->validate([
            'nom_utilisateur' => 'required|string|max:255',
            'email' => 'required|email|unique:utilisateurs',
            'num_tel' => 'required|string|max:15',
            'mot_de_passe' => 'required|string|min:8',
            'code_parrainage' => 'nullable|string|exists:utilisateurs,code_parrainage',
        ]);

        // Vérification si un code de parrainage a été utilisé
        $parrain = null;
        if ($request->filled('code_parrainage')) {
            $parrain = Utilisateur::where('code_parrainage', $request->code_parrainage)->first();
        }

        // Création de l'utilisateur
        $utilisateur = Utilisateur::create([
            'nom_utilisateur' => $request->nom_utilisateur,
            'email' => $request->email,
            'num_tel' => $request->num_tel,
            'mot_de_passe' => Hash::make($request->mot_de_passe),
            'code_parrainage' => $parrain->code_parrainage,
            'points_fidelite' => 0,
            'date_inscription' => $request->date_inscription,
            'id_parrain' => $parrain ? $parrain->id_utilisateur : null,
        ]);

        // Si un parrain est trouvé, on lui ajoute des points de fidélité ainsi qu'au filleul
        if ($parrain) {
            $parrain->points_fidelite += 100; // Par exemple, 100 points pour le parrain
            $parrain->save();

            $utilisateur->points_fidelite += 50; // Par exemple, 50 points pour le filleul
            $utilisateur->save();

            Parrainage::create([
                'id_parrain' => $parrain->id_utilisateur,
                'id_filleul' => $utilisateur->id_utilisateur,
                'date_parrainage' => now(),
                'etat_recompense' => 'Obtenu', // ou tout autre état initial que tu souhaites
            ]);
        }

        return response()->json($utilisateur, 201);
    }

    // Suppression d'un utilisateur avec vérification du mot de passe
    public function destroy(Request $request, $id_utilisateur)
    {
        $mot_de_passe = $request->mot_de_passe;

        // Appel de la méthode deleteWithPassword du modèle
        $result = Utilisateur::deleteWithPassword($id_utilisateur, $mot_de_passe);

        if ($result) {
            return response()->json(['message' => 'Utilisateur supprimé avec succès'], 200);
        } else {
            return response()->json(['error' => 'Mot de passe incorrect'], 401);
        }
    }



}
