<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterUniqIndexToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('ALTER TABLE `baskets` ADD UNIQUE `unique_baskets_index` (`user_id`, `product_id`)'); //it will be delete in futher migration
        DB::statement('ALTER TABLE `orders`  ADD UNIQUE `unique_orders_index` (`user_id`, `product_id`)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('ALTER TABLE `baskets` DROP INDEX `unique_baskets_index`');
        DB::statement('ALTER TABLE `orders` DROP INDEX `unique_orders_index`');
    }
}
