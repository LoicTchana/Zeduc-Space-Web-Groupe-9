<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class plats extends Model
{
    protected $table = 'plats';
    protected $primaryKey = 'nom_plat';
    protected $keyType = 'string';

    public $timestamps = false;
    protected $fillable = [
        'nom_plat',
        'prix_plat',
    ];

    public static function getAllPlat()
    {
        return self::all();
    }

    public function deletePlat($nom_plat){
        $plat = self::find($nom_plat);
        return $plat->delete();
    }
}
