<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('gerant', function (Blueprint $table) {
            $table->string('email_gerant')->primary();
            $table->string('nom_gerant');
            $table->string('mot_de_passe_gerant');
            $table->decimal('num_tel_gerant',15,0);
            $table->timestamp('date_debut_serivce');
        });
    }

    /**
     * Reverse the migrations.
     *
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('gerant');
    }
};
