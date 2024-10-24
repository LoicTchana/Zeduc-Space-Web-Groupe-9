<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index() {
        $menus = Menu::getMenu();

        return response()->json($menus);
    }

    public function CreateMenu(Request $request) {

        $request->validate([
            'nom_plat' => 'required|string|max:255',
            'prix_plat' => 'required',
            'quantite' => 'required',
        ]);

        $menus = Menu::create([
            'nom_plat'=>$request->nom_plat,
            'prix_plat'=>$request->prix_plat,
            'quantite'=>$request->quantite
        ]);
        return response()->json(['message'=>'Menu created successfully','menus'=>$menus]);
    }

}
