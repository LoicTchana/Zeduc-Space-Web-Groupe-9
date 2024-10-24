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
        Schema::create('menu', function (Blueprint $table) {
            $table->string('id_menu')->primary();
            $table->string('nom_plat');
            $table->decimal('prix_plat');
            $table->decimal('quantite');

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
        Schema::dropIfExists('menu');
    }
};
