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
        Schema::create('employe', function (Blueprint $table) {
            $table->string('id_employe')->primary();
            $table->string('nom_employe');
            $table->string('email_employe');
            $table->string('mot_de_passe_employe');
            $table->timestamp('date_embauche')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('employe');
    }
};
