<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageController extends Controller
{
    /**
     * Always redirect to the SinglePageApplication
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('app');
    }

}
