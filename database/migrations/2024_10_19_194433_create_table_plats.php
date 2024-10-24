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
        Schema::create('plats', function (Blueprint $table) {
            $table->string('nom_plat')->primary();
            $table->decimal('prix_plat');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('plats');
    }
};
