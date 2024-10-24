<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class parrainage extends Model
{
    protected $table = 'parrainages';
    protected $primaryKey = ['id_parrain','id_filleul'];

    protected $keyType = 'string';
    public $timestamps = true;
    protected $fillable = [
        'id_parrain',
        'id_filleul',
        'date_parrainage',
        'etat_recompense'
    ];

    public static function getAllParrainages(){
        return self::all();
}
}
