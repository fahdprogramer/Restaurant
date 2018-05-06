<?php 
namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model {
    
 protected $fillable =['id','plat_id','table_id','user_id','etat_reservation'];

 public $table="reservations";   
 
 public function user(){

 return $this->belogesTo('app\User');
}
    
public function plat(){

 return $this->hasMany('app\Plat');
}
public function table(){

 return $this->hasMany('app\Table');
}

 } 