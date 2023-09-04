<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class CreateClient extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:create-client {client} {pass}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create and Edit client';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $client = $this->argument('client');
        $pass =  $this->argument('pass');

        $user = User::where( 'email', $client)->first();

        if($user){
            $this->info("Edit user {$client} with password: {$pass}");
            $user->password = $pass;
            $user->save();
        }else{
            $this->info("Create user {$client} with password: {$pass}");
            $user = new User;
            $user->role = User::$role['client'];
            $user->email =  $client;
            $user->name =  'Guest';
            $user->password = $pass;
            $user->save();
        }

        return 0;
    }
}
