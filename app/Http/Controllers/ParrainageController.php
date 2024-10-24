<?php

namespace App\Http\Controllers;

use App\Models\parrainage;
use Illuminate\Http\Request;

class ParrainageController extends Controller
{

    public function index(){
        $parrainages = Parrainage::getAllParrainages();
        return response()->json(['message'=>'Voici la liste de tout les parrainages','data'=>$parrainages],200);
    }

}
