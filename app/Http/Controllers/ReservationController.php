<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Reservation;
use Auth;
use DB;

class ReservationController extends Controller
{
    public function createReservation(Request $request){

       

            Reservation::create([
            'user_id' => '3',
            'plat_id' => $request->get('id_plat'),
            'table_id' => $request->get('id_table')
        ]);

        DB::table('tables')->where('id', $request['id_table'])->update(['disponible'=>'0']);
        $reservation = Reservation::first();
        return $reservation;

    }
}

