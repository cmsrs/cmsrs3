<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBasketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('baskets', function (Blueprint $table) {
            $table->bigIncrements('id')->index();

            $table->unsignedInteger('qty');
            $table->unsignedBigInteger('user_id')->notNullable();
            $table->foreign('user_id')->notNullable()->references('id')->on('users');
            $table->unsignedBigInteger('product_id')->notNullable();
            $table->foreign('product_id')->notNullable()->references('id')->on('products');

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
        Schema::dropIfExists('baskets');
    }
}
