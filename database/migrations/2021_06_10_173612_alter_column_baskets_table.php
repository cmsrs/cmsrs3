<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterColumnBasketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('baskets', 'user_id')){

            Schema::table('baskets', function (Blueprint $table) {
                $table->dropForeign('baskets_user_id_foreign');
                $table->dropIndex('unique_baskets_index');
                $table->dropColumn('user_id');
            });
        }     

        if (Schema::hasColumn('baskets', 'product_id')){

            Schema::table('baskets', function (Blueprint $table) {

                $table->dropForeign('baskets_product_id_foreign');
                $table->dropColumn('product_id');
                //$table->dropForeign('baskets_product_id_foreign');
            });
        }     


        Schema::table('baskets', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('checkout_id')->notNullable();
            $table->foreign('checkout_id')->notNullable()->references('id')->on('checkouts')->onDelete('cascade');
            $table->integer('price')->nullable();

            $table->unsignedBigInteger('product_id')->notNullable();
            $table->foreign('product_id')->notNullable()->references('id')->on('products');

            //DB::statement('ALTER TABLE `baskets` DROP INDEX `unique_baskets_index`');    


        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
