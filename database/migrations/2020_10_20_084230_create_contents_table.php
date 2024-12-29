<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->bigIncrements('id')->index();

            $table->string('lang', 8); //->notNullable();
            $table->string('column', 32); //->notNullable();
            //$table->text('value')->nullable(); //consider use $table->mediumText('value')
            $table->mediumText('value')->nullable();

            $table->unsignedBigInteger('page_id')->nullable();
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('cascade');

            $table->unsignedBigInteger('product_id')->nullable();
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            //$table->unique(['lang', 'column', 'page_id', 'product_id'], 'translates_index_unique'); //it was 241129, sql-lite fix, it is the sam name in another table
            $table->unique(['lang', 'column', 'page_id', 'product_id'], 'contents_index_unique');

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
        Schema::dropIfExists('contents');
    }
}
