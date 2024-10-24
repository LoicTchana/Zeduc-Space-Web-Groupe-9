<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class gerant extends Model
{
    protected $table = 'gerant';
    protected $primaryKey = 'email_gerant';
    protected $keyType = 'string';
    public $timestamps = true;
    protected $fillable = [
        'email_gerant',
        'nom_gerant',
        'mot_de_passe_gerant',
        'num_tel_gerant',
        'date_debut_serivce'
    ];

    public function setMotDePasseGerantAttribute($value){
        $this->attributes['mot_de_passe_gerant'] = Hash::make($value);
    }
}
