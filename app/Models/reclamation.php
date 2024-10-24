<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class reclamation extends Model
{
    protected $table = 'reclamation';
    protected $primaryKey = 'id_reclamation';
    protected $keyType = 'string';

    public $timestamps = false;

    protected $fillable = [
        'id_reclamation',
        'id_utilisateur',
        'libelle_reclamation',
        'date_reclamation'
    ];

    public static function getAllReclamations()
    {
      return  self::all();
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            do {
                $model->id_reclamation = 'R' . str_pad(mt_rand(1, 999999), 6, '0', STR_PAD_LEFT);
            } while (self::where('id_reclamation', $model->id_reclamation)->exists());
        });
    }

    public function utilisateur(){
        return $this->belongsTo(Utilisateur::class,'id_utilisateur','id_utilisateur');
    }

}
