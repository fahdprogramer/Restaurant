<?php 
namespace App;
use illuminate\database\eloquent\model;

class Plat extends Model {
 protected $fillable =['name','description','prix','photo'];

 //public $timestamp = false ;
 public function reservation(){

 return $this->hasMany('app\models\reservation');
}
 
 }