<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $admPass = env('ADM_PASS', 'cmsrs123');

        DB::table('users')->insert([
            'name' => 'adm',
            'email' => 'adm@cmsrs.pl',
            'password' => Hash::make($admPass),
            'role' => 'admin'
        ]);




    }
}
