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
        Schema::create('parrainages', function (Blueprint $table) {
            $table->string('id_parrain');
            $table->string('id_filleul');
            $table->timestamp('date_parrainage')->useCurrent();
            $table->enum('etat_recompense',['Obtenu','Non obtenu']);

            $table->primary(['id_parrain', 'id_filleul']);
            $table->foreign('id_filleul')->references('id_utilisateur')->on('utilisateurs')->onDelete('cascade');
            $table->foreign('id_parrain')->references('id_utilisateur')->on('utilisateurs')->onDelete('cascade');

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
        Schema::dropIfExists('parrainages');
    }
};
