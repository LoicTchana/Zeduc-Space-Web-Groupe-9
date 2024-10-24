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
        Schema::create('adminstrateur', function (Blueprint $table) {
            $table->string('email_admin')->primary();
            $table->decimal('num_tel_admin',15,0);
            $table->string('nom_admin');
            $table->string('mot_de_passe_admin');
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
        Schema::dropIfExists('adminstrateur');
    }
};
