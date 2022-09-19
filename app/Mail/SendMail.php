<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;
    public $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.*
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('web@uia.gov.mn')
            ->subject('Кайзан '. $this->data['firstname'])
            ->view('dynamic_email_template')
            ->with('data', $this->data)
            ->attach($this->data['filename']);
            
        // return $this->from('web@uia.gov.mn')
        //     ->subject('Шинэ хэрэглэгчийн мэдээлэл')
        //     ->view('dynamic_email_template')
        //     ->with('data', $this->data)
        //     ->attachData($this->file, $this->filename, [
        //         'mime' => $this->type,
        //     ]);
            
    }
}

?>