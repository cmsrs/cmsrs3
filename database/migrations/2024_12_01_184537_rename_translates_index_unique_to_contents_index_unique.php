<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameTranslatesIndexUniqueToContentsIndexUnique extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('contents', function (Blueprint $table) {
            // Drop the old unique index
            $table->dropUnique('translates_index_unique');

            // Add the new unique index with the new name
            $table->unique(['lang', 'column', 'page_id', 'product_id'], 'contents_index_unique');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contents', function (Blueprint $table) {
            // Drop the new unique index
            $table->dropUnique('contents_index_unique');

            // Add the old unique index with the original name
            $table->unique(['lang', 'column', 'page_id', 'product_id'], 'translates_index_unique');
        });
    }
}
