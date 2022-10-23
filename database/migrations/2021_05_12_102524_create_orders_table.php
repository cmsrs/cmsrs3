<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id')->index();

            $table->unsignedInteger('qty');
            $table->unsignedBigInteger('user_id')->notNullable();
            $table->foreign('user_id')->notNullable()->references('id')->on('users');
            $table->unsignedBigInteger('product_id')->notNullable();
            $table->foreign('product_id')->notNullable()->references('id')->on('products');

            $table->unique(['user_id', 'product_id'], 'unique_orders_index' ); 
            //DB::statement('ALTER TABLE `orders`  ADD UNIQUE `unique_orders_index` (`user_id`, `product_id`)');

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
        Schema::dropIfExists('orders');
    }
}
