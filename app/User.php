<?php

namespace App;

use Illuminate\Notifications\Notifiable;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;


    public static $role = [
        'admin' => 'admin',
        'client' => 'client'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password' , 'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function setPasswordAttribute($password)
    {
        if (!empty($password)) {
            $this->attributes['password'] = Hash::make($password);

            // if( $this->role === 'admin' ) {
            //     $this->attributes['password'] = bcrypt($password);
            // }else{
            //     $this->attributes['password'] = bcrypt($password);
            // }
        }
    }

    static public function getTokenForClient()
    {
        $user = Auth::user();
        if( empty($user) ){
            throw new \Exception("User not auth");
        }

        return $user->getTokenClient();
    }

    public function getTokenClient()
    {
        $appKey = env('APP_KEY');
        if( empty($appKey) ){
            throw new \Exception("empty APP_KEY in config file");
        }
                
        return sha1($this->email."_".$this->id."_".$appKey);
    }

    public function checkClientByToken($token)
    {
        $expectedToken = $this->getTokenClient();
        if($expectedToken ==  $token){
            return true;
        }
        return false;
    }

    static public function  checkApiClientByToken($token)
    {
        $user = Auth::user();
        if( empty($user) ){
            throw new \Exception("User not auth - for check");
        }
        if( !$user->checkClientByToken($token) ){
            throw new \Exception("User not valid - check");
        }
        return true;
    }

}
