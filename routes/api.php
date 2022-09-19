<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\News;
use App\Models\Course;
use App\Models\Comments;
use App\Models\Therapists;
use App\Models\Slider;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


# LOGIN AND REGISTER POST API
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/login', [AuthController::class, 'login']);

# GET API
Route::get('/get/news', function(request $request){
    return DB::table('news')
    ->orderBy('id', 'desc')
    ->get();
});

Route::get('/get/courses', function(request $request){
    return DB::table('course')->get();
});

Route::get('/get/course/{id}', function(request $request, $id){
    return DB::table('course')
    ->where('id', '=', $id)
    ->get();
});

Route::get('/get/comments', function(request $request){
    return DB::table('comments')->get();
});

Route::get('/get/comment/{newsID}', function(request $request, $newsID){
    return DB::table('comments')
    ->where('news_id', '=', $newsID)
    ->get();
});

Route::get('/get/therapist', function(request $request){
    return DB::table('therapists')->get();
});

Route::get('/get/users', function(request $request){
    return DB::table('users')->get();
});

Route::get('/authuser/{email}', function($email){

    return DB::table('users')
    ->where('email', '=', $email)
    ->get();
});

Route::get('/get/user/{id}', function(request $request, $id){
    return DB::table('users')
    ->where('id', '=', $id)
    ->get();
});

Route::get('/get/sliders', function(){
    return DB::table('slider')
    ->get();
});

//POST API

Route::post('/post/slider/{id}', function(request $request, $id){

    $slider = Slider::find($id);

    $name = $request->file('file')->getClientOriginalName();
    $slider->image = $name;
    $slider->link = $request->link;

    $slider->save();

    $path = public_path('images/sliders');
    $attachment = $request->file('file');
    
    $attachment->move($path, $name);

    return redirect('dashboard');
});

Route::post('/post/news', function(request $request){

    $news = new News;

    $news->title = $request->title;
    $news->content = $request->content;

    $name = $request->file('file')->getClientOriginalName();
    $news->image = $name;

    $news->save();

    $path = public_path('images');
    $attachment = $request->file('file');
    
    $attachment->move($path, $name);

    return redirect('dashboard');
});

Route::post('/post/newsupdate/{id}', function(request $request, $id){

    $news = News::find($id);

    $news->title = $request->title;
    $news->content = $request->content;

    $name = $request->file('file')->getClientOriginalName();
    $news->image = $name;

    $news->save();

    $path = public_path('images');
    $attachment = $request->file('file');

    $attachment->move($path, $name);

    return redirect('dashboard');

});

Route::post('/post/course', function(request $request){

    $course = new Course;

    $course->title = $request->title;
    $course->category_id = $request->category_id;
    $course->content = $request->content;

    $name = $request->file('file')->getClientOriginalName();
    $course->image = $name;

    $course->save();

    $path = public_path('images/courses');
    $attachment = $request->file('file');
    $attachment->move($path, $name);
});

Route::post('/post/comment', function(request $request){

    $comment = new Comments;

    $comment->user_id = $request->user_id;
    $comment->news_id = $request->news_id;
    $comment->comment = $request->comment;

    $comment->save();
    return redirect()->back();
});

Route::post('/post/therapist', function(request $request){

    $therapist = new Therapists;

    $therapist->firstname = $request->firstname;
    $therapist->lastname = $request->lastname;
    $therapist->age = $request->age;
    $therapist->phone = $request->phone;
    $therapist->address = $request->address;
    $therapist->description = $request->description;

    $name = $request->file('file')->getClientOriginalName();
    $therapist->profile = $name;

    $therapist->save();

    $path = public_path('images/therapists');
    $attachment = $request->file('file');
    
    $attachment->move($path, $name);
});

Route::post('/post/user', function(request $request){
    

});

Route::get('/get/news/{id}', function(request $request, $id){
    return DB::table('news')
    ->where('id', '=', $id)
    ->get();
});

//Delete Api

Route::post('/delete/news/{id}', function(request $request, $id){
    DB::table('news')->where('id', '=', $id)->delete();

    return redirect('dashboard');
});