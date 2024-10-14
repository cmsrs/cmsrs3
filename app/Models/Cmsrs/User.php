<?php

namespace App\Models\Cmsrs;

use Illuminate\Foundation\Auth\User as Authenticatable;
//use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    public static $role = [
        'admin' => 'admin',
        'client' => 'client',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 'email', 'password', 'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $columnsAllowedToSort = [
        'id',
        'name',
        'email',
        'created_at',
        'updated_at',
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
        if (! empty($password)) {
            $this->attributes['password'] = Hash::make($password);

            // if( $this->role === 'admin' ) {
            //     $this->attributes['password'] = bcrypt($password);
            // }else{
            //     $this->attributes['password'] = bcrypt($password);
            // }
        }
    }

    public static function getTokenForClient()
    {
        $user = Auth::user();
        if (empty($user)) {
            throw new \Exception('User not auth');
        }
        if (! ($user instanceof User)) {
            throw new \Exception('User not authenticated or not an instance of User');
        }

        return $user->getTokenClient();
    }

    public function getTokenClient()
    {
        $appKey = env('APP_KEY');
        if (empty($appKey)) {
            throw new \Exception('empty APP_KEY in config file');
        }

        return sha1($this->email.'_'.$this->id.'_'.$appKey);
    }

    public function checkClientByToken($token)
    {
        $expectedToken = $this->getTokenClient();
        if ($expectedToken == $token) {
            return true;
        }

        return false;
    }

    public static function checkApiClientByToken($token)
    {
        $user = Auth::user();
        if (empty($user)) {
            throw new \Exception('User not auth - for check');
        }

        if (! ($user instanceof User)) {
            throw new \Exception('User not authenticated or not an instance of User');
        }

        if (! $user->checkClientByToken($token)) {
            throw new \Exception('User not valid - check');
        }

        return true;
    }

    public static function clientValidator(array $data)
    {
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                0 => 'required',
                1 => 'string',
                2 => 'email',
                3 => 'max:255',
                4 => ! empty($data['id']) ? Rule::unique('users')->ignore($data['id']) : Rule::unique('users'),
            ],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];

        return Validator::make($data, $rules);
    }

    public static function createClient(array $data)
    {
        if (empty($data['name']) || empty($data['email']) || empty($data['password'])) {
            throw new \Exception('Sth wrong with client data i it must be passed validation rules');
        }

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'role' => User::$role['client'],
            'password' => $data['password'],   //Hash::make($data['password']),
        ]);
    }
}
