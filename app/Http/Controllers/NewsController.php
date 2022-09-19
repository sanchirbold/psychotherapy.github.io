<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\News;
use App\Models\Votes;
use App\Models\Stats;
use Carbon\Carbon;


class NewsController extends Controller
{
    public function index(){
        $news = News::orderBy('created_at','desc')->take(6)->get();

        return view('test', ['news' => $news]);
        
    }

    public function vote(request $request){

        $vote = new Votes;
        $now = Carbon::now()->toDateTimeString();

        $vote->option_id = $request->option_id;
        $vote->ip = $request->ip();
        $vote->voted_on = $now;

        $vote->save();

        return redirect('/');
    }

    public function image($imagename){

        $path = public_path().'/images/'. $imagename;
        return Response::download($path);
        
    }

    public function count($id){
        
        DB::table('news')->where('news_id', $id)->increment('read_count', 1);
        
    }

    public function stats(request $request){
        
        $view = new Stats;

        $view->ip = $request->ip();

        $view->save();

    }
}
