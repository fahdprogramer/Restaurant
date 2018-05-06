<?php

Route::group(['prefix' => 'api'], function() {
    Route::post('searchavailabity', 'RoomCalendarController@searchAvailability');
    Route::post('createreservation', 'ReservationController@createReservation');
});

Route::group(['prefix' => 'adminapi'], function()
{
    Route::resource('room_type', 'RoomTypeController');
    Route::post('setpriceinrange', 'RoomCalendarController@setPriceInRangeForRoomType');


});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/api/v1/check-Register', 'Auth\RegisterController@register');

Route::get('/api/v1/plats', 'PlatController@index');
