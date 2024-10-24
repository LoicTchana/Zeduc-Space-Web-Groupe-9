<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class vente extends Model
{
    protected $table = 'table_vente_plats';
    protected $primaryKey = ['nom_plat','nombre_occurence'];

    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = [
        'nom_plat',
        'nombre_occurence',
        'revenu'
    ];

    public static function getVente(){
        return self::all();
    }

    public function plat(){
        return $this->belongsTo(plats::class,'nom_plat','nom_plat');
    }
}
