<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTypePagesTable extends Migration
{
    public function up()
    {
        Schema::table('pages', function (Blueprint $table) {
            //
            DB::statement("ALTER TABLE pages MODIFY COLUMN  type varchar(100) not null default 'cms'");
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
            DB::statement("ALTER TABLE pages MODIFY COLUMN  type ENUM('cms','gallery','shop','contact','main_page','privacy_policy','login','projects','clear') not null");
        });
    }
}
