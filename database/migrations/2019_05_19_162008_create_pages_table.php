<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

      //'title', 'short_title', 'published', 'position', 'type', 'menu_id'

        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('title')->notNullable();
            $table->string('short_title')->nullable();
            $table->boolean('published')->default(0);
            $table->integer('position')->unsigned()->nullable();
            $table->enum('type', ['cms', 'gallery', 'shop']);
            $table->text('content')->nullable();
            $table->string('slug')->notNullable();
            $table->unsignedBigInteger('menu_id')->nullable();
            $table->foreign('menu_id')->nullable()->references('id')->on('menus')->onDelete('cascade');
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
        Schema::dropIfExists('pages');
    }
}
