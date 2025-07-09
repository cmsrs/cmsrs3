<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
        $admEmail = config('cmsrs.admin.email'); // env('ADM_EMAIL', 'adm@cmsrs.pl');
        $admPass = config('cmsrs.admin.password'); // env('ADM_PASS', 'cmsrs123');

        DB::table('users')->insert([
            'name' => 'adm',
            'email' => $admEmail,
            'password' => Hash::make($admPass),
            'role' => 'admin',
        ]);

        $emailClient = config('cmsrs.client.email');  // env('CLIENT_EMAIL', 'client@cmsrs.pl');
        $passClient = config('cmsrs.client.password'); // env('CLIENT_PASS', 'cmsrs456');
        DB::table('users')->insert([
            'name' => 'client',
            'email' => $emailClient,
            'password' => Hash::make($passClient),
            'role' => 'client',
        ]);

    }
}
