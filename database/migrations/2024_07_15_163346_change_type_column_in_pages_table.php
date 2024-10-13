<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->string('type', 63)->default('cms')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->enum('type', ['cms', 'gallery', 'shop', 'contact', 'main_page', 'privacy_policy', 'login', 'projects', 'clear', 'checkout', 'register', 'home',  'shoppingsuccess', 'search', 'forgot', 'inner'])
                ->default('cms')
                ->change();
        });
    }
};
