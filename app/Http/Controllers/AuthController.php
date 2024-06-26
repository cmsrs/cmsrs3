<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use PHPOpenSourceSaver\JWTAuth\Exceptions\JWTException;
use Validator;
use DB; //, Hash; //Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Mail\Message;

class AuthController extends Controller
{

    /**
     * API Login, on success return JWT Auth token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];

        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
        }

        //$credentials['is_verified'] = 1;
        return $this->getTokenByCredentials($credentials);
    }

    private function getTokenByCredentials($credentials)
    {
        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                //return response()->json(['success' => false, 'error' => 'We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address.'], 404);
                return response()->json(['success' => false, 'error' => 'We cant find an account with this credentials.'], 200);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to login, please try again.'], 500);
        }

        $user = User::where('email', '=', $credentials['email'])->firstOrFail();
        if ($user->role != User::$role['admin']) {
            return response()->json(['success' => false, 'error' => 'No access.'], 401);
        }

        // all good so return the token
        return response()->json(['success' => true, 'data'=> [ 'token' => $token ]], 200);
    }


    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $this->validate($request, ['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['success' => true, 'message'=> "You have successfully logged out."]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to logout, please try again.'], 500);
        }
    }

    /**
     * API Register
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $demoStatus = env('DEMO_STATUS', false);
        if ($demoStatus) {
            echo "Not permission";
        } else {
            if ('127.0.0.1' !== $request->ip() ||  ($request->input('secret') !== $_ENV['RS_SECRET'])) {
                return response()->json(['success'=> false, 'error'=> 'no access'  ]);
            }
      
            $credentials = $request->only('name', 'email', 'password');
      
            $rules = [
                  'name' => 'max:255',
                  'email' => 'required|email|max:255|unique:users'
              ];
            $validator = Validator::make($credentials, $rules);
            if ($validator->fails()) {
                return response()->json(['success'=> false, 'error'=> $validator->messages()]);
            }
            $name = $request->name;
            $email = $request->email;
            $password = $request->password;
      
      
            $user = new User([
                  'email'    => $email,
                  'name'     => $name,
                  'role' => User::$role['admin']
              ]);
      
            $user->password = $password;
            $user->save();
      
            return $this->getTokenByCredentials($credentials);
        }
    }
}
