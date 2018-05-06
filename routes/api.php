<?php

/*

Route::post('user/register', 'APIRegisterController@register');
Route::post('user/login', 'APILoginController@login');
Route::post('user/user', 'APILoginController@getAuthenticatedUser');
Route::get('plats', 'PlatController@index');
Route::get('tables', 'TableController@index');
Route::post('reservation', 'ReservationController@createReservation');

Route::middleware('jwt.auth')->get('users', function(Request $request) {
    return auth()->user();
    });
*/


    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::middleware('jwt.auth')->get('me', 'AuthController@me');
    Route::post('user', 'AuthController@getAuthenticatedUser');
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::get('plats', 'PlatController@index');
    Route::get('tables', 'TableController@index');
    Route::post('reservation', 'ReservationController@createReservation');