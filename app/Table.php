<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Table extends Model {
    
 public $table="tables";   
 protected $fillable =['nbrMax','nbrMin','disponible'] ;

 
 public function Reservation(){


 return $this->belongsTo('app\Reservation');
     
}
 }
 
 


?> 