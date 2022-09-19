<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;
use File;

class EmailController extends Controller
{
    function send(Request $request)
    {
        // $this->validate($request, [
        //     'name'     =>  'required',
        //     'email'  =>  'required|email',
        //     'message' =>  'required',
        // ]);
        
        $path = public_path('attachment');
        $attachment = $request->file('file');

        $name = time().'.'.$attachment->getClientOriginalExtension();
        if(!File::exists($path)) {
            File::makeDirectory($path, $mode = 0777, true, true);
        }
        $attachment->move($path, $name);
        
        $filename = $path.'/'.$name;

        $data = array(
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'number' => $request->number,
            'email' => $request->email,
            'other' => $request->other,
            'filename' => $filename,
        );

        Mail::to('purwee790@gmail.com')->send(new SendMail($data));
        return back()->with('success',  $filename );
    }
}
