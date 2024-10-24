<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class menu extends Model
{
    protected $table = 'menu';
    protected $primaryKey = 'id_menu';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $fillable = [
        'id_menu',
        'nom_plat',
        'prix_plat',
        'quantite'
    ];

    public static function getMenu(){
        return self::all();
    }

}
