<?php
namespace App\Http\Controllers;
 
use App\Plat;
use Illuminate\Http\Request;
 
use App\Http\Requests;
use App\Http\Controllers\Controller;
 
 
 
class PlatController extends Controller
{
 
    public function index()
    {
        $plat = Plat::all();
        return $plat;
    }

    public function show($id)
    {
        $plat = plat::find($id);

        if($plat)
        {
            return response()->json(['success' => 'success'], 200);
        }
 
        return response()->json(['error'{$id} => 'invalid'], 404);
    }
 
    public function store(Request $request)
    {
        $food_type=new Plat($request->all());
        $food_type->save();
 
        return $food_type;
    }
}
 