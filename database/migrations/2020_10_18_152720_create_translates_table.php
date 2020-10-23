<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranslatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('translates', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('lang', 8)->notNullable();
            $table->string('column', 32)->notNullable();
            $table->string('value', 510)->nullable();
            
            $table->unsignedBigInteger('menu_id')->nullable();
            $table->foreign('menu_id')->nullable()->references('id')->on('menus')->onDelete('set null');

            $table->unsignedBigInteger('page_id')->nullable();
            $table->foreign('page_id')->nullable()->references('id')->on('pages')->onDelete('set null');

            $table->unsignedBigInteger('image_id')->nullable();
            $table->foreign('image_id')->nullable()->references('id')->on('images')->onDelete('set null');

            $table->unique(['lang', 'column', 'menu_id', 'page_id', 'image_id' ]); 
            $table->timestamps();        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('translates');
    }
}
