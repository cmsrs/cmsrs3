<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            // $table->string('name');
            $table->string('sku')->nullable();
            $table->integer('price')->nullable();
            // $table->text('description')->nullable();
            // $table->string('photo')->nullable();
            $table->boolean('published')->default(0);
            $table->unsignedBigInteger('page_id')->nullable();
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('cascade');
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
        Schema::dropIfExists('products');
    }
}
