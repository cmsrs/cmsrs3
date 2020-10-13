<?php

namespace App\Http\Controllers;

use App\Config;

class ConfigController extends Controller
{

  public function index()
  {
      $config = [];
      $config['page_types'] = Config::arrGetPageTypes();


      return response()->json(['success' => true, 'data'=> $config], 200);
  }

}
