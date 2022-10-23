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

            //$table->unsignedBigInteger('user_id')->notNullable();
            //$table->foreign('user_id')->notNullable()->references('id')->on('users');


            //$table->unsignedBigInteger('product_id')->notNullable();
            //$table->foreign('product_id')->notNullable()->references('id')->on('products');

            $table->unsignedBigInteger('checkout_id')->notNullable();
            $table->foreign('checkout_id')->notNullable()->references('id')->on('checkouts')->onDelete('cascade');
            $table->integer('price')->nullable();

            $table->unsignedBigInteger('product_id')->notNullable();
            $table->foreign('product_id')->notNullable()->references('id')->on('products');




            //$table->unique(['user_id', 'product_id'], 'unique_baskets_index' ); 
            //DB::statement('ALTER TABLE `baskets` ADD UNIQUE `unique_baskets_index` (`user_id`, `product_id`)'); //it will be delete in futher migration

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
