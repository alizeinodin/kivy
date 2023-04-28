<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pays', function (Blueprint $table) {
            $table->id();
            $table->integer('amount');
            $table->string('trans_id', 100)->nullable();
            $table->enum('status', ['accepted', 'pending'])->default('pending');
            $table->string('card_holder', 50)->nullable();
            $table->string('customer_phone', 50)->nullable();
            $table->string('Shaparak_Ref_Id', 100)->nullable();
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
        Schema::dropIfExists('pays');
    }
};
