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
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->string('id_utilisateur', 255)->primary();
            $table->string('nom_utilisateur', 255)->nullable();
            $table->string('email', 255)->unique();
            $table->decimal('num_tel', 15, 0)->nullable();  // Assuming phone numbers with up to 15 digits
            $table->decimal('points_fidelite', 10, 2)->default(0);  // Fidelity points
            $table->string('id_parrain', 255)->nullable();
            $table->timestamp('date_inscription')->useCurrent();
            $table->string('mot_de_passe', 255);
            $table->string('code_parrainage')->nullable();
            $table->enum('statut_compte', ['Actif', 'Inactif'])->default('Actif');

            // Foreign key constraint
            $table->foreign('id_parrain')->references('id_utilisateur')->on('utilisateurs')->onDelete('cascade');

            // Custom validations

             // You can modify the REGEXP based on your password rules
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('utilisateurs');
    }
};
