<?php
namespace App\Http\Controllers;
 
use App\Table;
use Illuminate\Http\Request;
 
use App\Http\Requests;
use App\Http\Controllers\Controller;
 
 
 
class TableController extends Controller
{
 
    public function index()
    {
        $table = Table::all();
        return $table;
    }

    public function show($id)
    {
        $table = table::find($id);

        if($table)
        {
            return response()->json(['success' => 'success'], 200);
        }
 
        return response()->json(['error'{$id} => 'invalid'], 404);
    }
 
    public function store(Request $request)
    {
        $table_type=new Table($request->all());
        $table_type->save();
 
        return $table_type;
    }
}
 