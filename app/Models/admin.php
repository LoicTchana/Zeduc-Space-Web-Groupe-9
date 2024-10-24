<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class admin extends Model
{
    protected $table = 'adminstrateur';
    protected $primaryKey = 'email_admin';
    protected $keyType = 'string';
    protected $fillable = [
        'email_admin',
        'num_tel_admin',
        'nom_admin',
        'mot_de_passe_admin'
    ];

    public function setMotDePasseAdminAttribute($value){
        $this->attributes['mot_de_passe_admin'] = Hash::make($value);
    }
}
