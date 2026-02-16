<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            // $table->string('title')->notNullable();
            // $table->string('short_title')->nullable();
            // $table->string('description')->nullable();
            $table->boolean('published')->default(0);
            $table->boolean('commented')->default(0);
            $table->boolean('after_login')->default(0);
            $table->integer('position')->unsigned()->nullable();

            $table->string('type', 63)->default('cms');
            // $table->enum('type', ['cms', 'gallery', 'shop', 'contact', 'main_page', 'privacy_policy', 'login', 'projects', 'clear', 'checkout', 'register', 'home',  'shoppingsuccess', 'search', 'forgot', 'inner'])->default('cms');
            // $table->text('content')->nullable();
            // $table->string('slug')->notNullable();

            // DB::statement("ALTER TABLE pages MODIFY COLUMN  type ENUM('cms','gallery','shop','contact','main_page','privacy_policy','login','projects','clear') not null");

            // $table->unsignedBigInteger('page_id')->nullable();
            // $table->foreign('page_id')->references('id')->on('pages')->onDelete('set null');
            $table->foreignId('page_id')->nullable()->constrained()->nullOnDelete();

            // $table->unsignedBigInteger('menu_id')->nullable();
            // $table->foreign('menu_id')->references('id')->on('menus')->onDelete('cascade');
            $table->foreignId('menu_id')->nullable()->constrained()->cascadeOnDelete();
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
