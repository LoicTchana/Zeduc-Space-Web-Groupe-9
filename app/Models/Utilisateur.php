<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class Utilisateur extends Model
{
    protected $table = 'utilisateurs';

    protected $primaryKey = 'id_utilisateur';
    protected $keyType = 'string';  // Déclarer que la clé est une chaîne
    public $incrementing = false;   // Désactiver l'auto-incrémentation

    public $timestamps = false;

    protected $fillable = [
        'nom_utilisateur',
        'email',
        'num_tel',
        'points_fidelite',
        'id_parrain',
        'date_inscription',
        'mot_de_passe',
        'statut_compte',
        'code_parrainage'
    ];

    // Mutator pour hasher le mot de passe
    public function setMotDePasseAttribute($value)
    {
        $this->attributes['mot_de_passe'] = Hash::make($value);
    }

    // Méthode pour récupérer tous les utilisateurs
    public static function getAll()
    {
        return self::all();
    }

    // Méthode pour supprimer un utilisateur après vérification du mot de passe
    public static function deleteWithPassword($id_utilisateur, $mot_de_passe)
    {
        $utilisateur = self::find($id_utilisateur);

        if ($utilisateur && Hash::check($mot_de_passe, $utilisateur->mot_de_passe)) {
            return $utilisateur->delete();
        }

        return false;
    }

    // Génération de l'ID utilisateur unique
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            do {
                $model->id_utilisateur = 'U' . str_pad(mt_rand(1, 999999), 6, '0', STR_PAD_LEFT);
            } while (self::where('id_utilisateur', $model->id_utilisateur)->exists());
        });

        static::creating(function ($utilisateur) {
            $utilisateur->code_parrainage= Str::random(10);
        });
    }

    // Relation de parrainage
    public function parrain()
    {
        return $this->belongsTo(Utilisateur::class, 'id_parrain');
    }

    // Scope pour les utilisateurs actifs
    public function scopeActif($query)
    {
        return $query->where('statut_compte', 'actif');
    }
}
