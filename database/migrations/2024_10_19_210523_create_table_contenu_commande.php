<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('contenu_commande', function (Blueprint $table) {
            $table->string('id_commande');
            $table->string('nom_plat');
            $table->decimal('prix_plat');

            $table->foreign('nom_plat')->references('nom_plat')->on('plats');
            $table->foreign('id_commande')->references('id_commande')->on('commande');
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
        Schema::dropIfExists('contenu_commande');

    }
};

