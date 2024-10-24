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
        Schema::create('table_vente_plats', function (Blueprint $table) {
            $table->string('nom_plat');
            $table->decimal('nombre_occurence');
            $table->decimal('revenu');

            $table->primary(['nom_plat','nombre_occurence']);
            $table->foreign('nom_plat')->references('nom_plat')->on('plats')->onDelete('cascade');
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
        Schema::dropIfExists('table_vente_plats');
    }
};
