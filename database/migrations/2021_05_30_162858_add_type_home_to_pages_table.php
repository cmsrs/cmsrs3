<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeHomeToPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pages', function (Blueprint $table) {
            //
            DB::statement("ALTER TABLE pages MODIFY COLUMN  type ENUM('cms','gallery','shop','contact','main_page','privacy_policy','login','projects','clear','checkout','register','home') not null");            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pages', function (Blueprint $table) {
            //
            DB::statement("ALTER TABLE pages MODIFY COLUMN  type ENUM('cms','gallery','shop','contact','main_page','privacy_policy','login','projects','clear','checkout','register','home') not null");            
        });
    }
}
