<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class contenu extends Model
{
    protected $table = 'contenu_commande';
    public $timestamps = false;
    protected $fillable = [
        'id_commande',
        'nom_plat',
        'prix_plat'
    ];

    public function commande(){
        return $this->belongsTo(commande::class, 'id_commande', 'id_commande');
    }
    public function plat(){
        return $this->belongsTo(plats::class, 'nom_plat', 'nom_plat');
    }
}
