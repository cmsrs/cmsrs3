<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('name')->nullable();
            // $table->string('alt')->nullable();
            $table->integer('position')->unsigned()->nullable();
            $table->unsignedBigInteger('page_id')->nullable();
            $table->unsignedBigInteger('product_id')->nullable();
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
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
        Schema::dropIfExists('images');
    }
}
