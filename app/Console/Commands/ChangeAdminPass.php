<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class ChangeAdminPass extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:change-admin-pass {pass}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Change admin password';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $pass =  $this->argument('pass');

        if(!$pass){
            echo 'set admin password';
            exit;
        }

        $roleAdm = User::$role['admin'];
        $user = User::where( 'role', $roleAdm)->first();
        if($user){
            $user->password = $pass;
            $user->save();                
        }else{
            echo "can't find admin user";
            exit;
        }

        return 0;
    }
}
