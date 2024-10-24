<?php

use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ContenuController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ParrainageController;
use App\Http\Controllers\PlatController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\VenteController;
use App\Http\Controllers\ReclamationController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/utilisateurs', [utilisateurController::class, 'index']);
    Route::post('/utilisateurs', [utilisateurController::class, 'store']);
    Route::delete('/utilisateurs/{id_utilisateur}', [utilisateurController::class, 'destroy']);

    Route::get('/employe', [EmployeController::class, 'index']);
    Route::post('/employe', [EmployeController::class, 'store']);
    Route::delete('/employe/{id_employe}', [EmployeController::class, 'destroy']);

// Liste toutes les commandes
    Route::get('/commandes', [CommandeController::class, 'index']);

// Créer une nouvelle commande
    Route::post('/commandes', [CommandeController::class, 'createCommande']);

// Appliquer une réduction sur une commande à l'aide des points de fidélité
    Route::post('/commandes/reduction', [CommandeController::class, 'Reduction']);

    Route::get('/contenu/{id_commande}', [ContenuController::class, 'showContenu']);

// Récupérer tous les menus
    Route::get('/menus', [MenuController::class, 'index']);

// Créer un nouveau menu
    Route::post('/menus', [MenuController::class, 'CreateMenu']);

    Route::get('/parrainages', [ParrainageController::class, 'index']);

// Récupérer tous les plats
    Route::get('/plats', [PlatController::class, 'index']);

// Créer un nouveau plat
    Route::post('/plats', [PlatController::class, 'store']);

// Mettre à jour un plat
    Route::put('/plats/{nom_plat}', [PlatController::class, 'update']);

// Supprimer un plat
    Route::delete('/plats/{nom_plat}', [PlatController::class, 'destroy']);

    Route::get('/ventes', [VenteController::class, 'index']);

// Récupérer toutes les réclamations
    Route::get('/reclamations', [ReclamationController::class, 'index']);

// Créer une nouvelle réclamation
    Route::post('/reclamations', [ReclamationController::class, 'store']);

});
