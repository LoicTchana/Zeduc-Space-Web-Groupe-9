<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use App\Models\contenu;
use App\Models\menu;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function index(){
        $commandes = Commande::listeToutesCommandes();

        return response()->json($commandes);
    }

    public function createCommande(Request $request){


        // Création de la commande (par exemple, en générant un nouvel ID)
        $commande = new Commande();
        $commande->id_utilisateur = $request->id_utilisateur;
        $commande->points_gagne = 0;  // Initialement, points de fidélité à 0
        $commande->date_commande = now();

        // Sauvegarde temporaire de la commande (sans montant total pour l'instant)
        $commande->save();

        // Ajout du contenu de la commande (les plats)
        $plats = $request->plats;  // Par exemple, une liste des plats envoyée dans la requête

        $montantTotal = 0;

        foreach ($plats as $plat) {
            // Récupération du plat depuis le modèle Menu
            $menu = Menu::find($plat['id_menu']);

            if ($menu && $menu->quantite >= $plat['quantite']) {
                // Ajout du contenu de la commande
                $contenuCommande = new Contenu();
                $contenuCommande->id_commande = $commande->id_commande;
                $contenuCommande->nom_plat = $menu->nom_plat;
                $contenuCommande->prix_plat = $menu->prix_plat;
                $contenuCommande->quantite = $plat['quantite'];
                $contenuCommande->save();

                // Mise à jour de la quantité dans le menu
                $menu->quantite -= $plat['quantite'];
                $menu->save();  // Sauvegarder la nouvelle quantité

                // Calcul du montant total
                $montantTotal += $menu->prix_plat * $plat['quantite'];
            } else {
                return response()->json(['error' => "Quantité insuffisante pour le plat " . $menu->nom_plat], 400);
            }
        }

        // Mise à jour du montant total dans la table 'commande'
        $commande->montant_total = $montantTotal;

        $commande->points_gagne = $montantTotal/1000;


        $utilisateur = \App\Models\Utilisateur::find($request->id_utilisateur);

        if ($utilisateur) {
            // Ajouter les points gagnés aux points de fidélité actuels de l'utilisateur
            $utilisateur->points_fidelite += $commande->points_gagne;

            // Sauvegarder la mise à jour des points de fidélité
            $utilisateur->save();
        }

        $commande->save();

        return response()->json(['message' => 'Commande créée avec succès', 'commande' => $commande]);
    }

    public function Reduction(Request $request){

        // Récupérer l'utilisateur et la commande
        $utilisateur = Utilisateur::find($request->id_utilisateur);
        $commande = Commande::find($request->id_commande);

        // Vérifier si l'utilisateur et la commande existent
        if (!$utilisateur || !$commande) {
            return response()->json(['error' => 'Utilisateur ou commande non trouvée'], 404);
        }

        // Nombre de points que l'utilisateur souhaite utiliser
        $points_utilises = $request->points_utilises;

        // Vérifier si l'utilisateur a suffisamment de points
        if ($utilisateur->points_fidelite < $points_utilises) {
            return response()->json(['error' => 'Points de fidélité insuffisants'], 400);
        }

        $reduction = ($points_utilises * 1000)/1000;

        $nouveau_montant = $commande->montant_total - $reduction;

        if($nouveau_montant < 0){
            $nouveau_montant =0;
        }
        $commande->montant_total = $nouveau_montant;

        $utilisateur->points_fidelite -= $points_utilises;
        $utilisateur->save();
        $commande->save();

        return response()->json([
            'message' => 'Points de fidélité utilisés avec succès',
            'nouveau_montant' => $nouveau_montant,
            'points_restants' => $utilisateur->points_fidelite
        ]);

    }

}

