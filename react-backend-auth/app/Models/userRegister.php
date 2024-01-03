<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userRegister extends Model
{
    use HasFactory;
    protected $fillable = [
        
        'FirstName',
        'LastName',
    ];
}
