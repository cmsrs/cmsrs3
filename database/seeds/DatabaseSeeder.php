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
        $admEmail = env('ADM_EMAIL', 'adm@cmsrs.pl');
        $admPass = env('ADM_PASS', 'cmsrs123');

        DB::table('users')->insert([
            'name' => 'adm',
            'email' => $admEmail,
            'password' => Hash::make($admPass),
            'role' => 'admin'
        ]);

        $emailClient = 'client@cmsrs.pl';
        $passClient = 'cmsrs456';
        DB::table('users')->insert([
            'name'     => 'client',
            'email'    => $emailClient,
            'password' => Hash::make($passClient),
            'role' => 'client'
        ]);


    }
}
