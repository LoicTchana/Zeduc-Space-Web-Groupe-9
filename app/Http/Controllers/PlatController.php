<?php

namespace App\Http\Controllers;

use App\Models\plats;
use Illuminate\Http\Request;

class PlatController extends Controller
{
    public function index(){
        $plats = plats::getAllPlat();
        return response()->json($plats);
    }

    public function store(Request $request){

        $request->validate([
            'nom_plat'=>'required|unique:plats',
            'prix_plat'=>'required',
        ]);

        $plats = plats::create([
            'nom_plat'=>$request->nom_plat,
            'prix_plat'=>$request->prix_plat
        ]);

        return response()->json(['message'=>'Plat ajouté avec succes','plat'=>$plats]);
    }


    public function update($data,$nom_plat){

        $plats = plats::findorFail($nom_plat);

        if($plats){

            $plats->nom_plat = $data['nom_plat'];
            $plats->prix_plat = $data['prix_plat'];
            $plats->save();

            return $plats;

        }

        return null;

    }

    public function destroy($nom_plat){

        $result = plats::deletePlat($nom_plat);

        if($result){
            return response()->json(['message'=>'Le plat a été supprimé avec succes','plat'=>$nom_plat]);

        }else{
            return response()->json(['Error'=>'Le plat que vous avez choisi n"existe pas ','plat'=>$nom_plat]);
        }

    }

}
