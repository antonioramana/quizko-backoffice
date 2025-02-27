<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable=['answer','is_correct','question_id'];

    public function question(){
        return $this->belongsTo(Question::class, 'question_id');
    }
    public function candidate_answer()
    {
        return $this->hasMany(CandidateAnswer::class);
    }
}

