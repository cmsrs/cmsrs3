<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFkToTranslatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('translates', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id')->nullable();
            $table->foreign('product_id')->nullable()->references('id')->on('products')->onDelete('cascade');
            $table->unique(['lang', 'column', 'menu_id', 'page_id', 'image_id', 'product_id'], 'translates_index_unique' ); 

            $table->dropUnique('translates_lang_column_menu_id_page_id_image_id_unique');                        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('translates', function (Blueprint $table) {
            //
            // $table->dropUnique('translates_index_unique');
            // $table->dropIndex('translates_product_id_foreign');
            // $table->dropColumn('product_id');            
            // $table->unique(['lang', 'column', 'menu_id', 'page_id', 'image_id']);             

        });
    }
}
