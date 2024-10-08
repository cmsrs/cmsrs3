<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cmsrs\Comment;
use App\Models\Cmsrs\Page;
use Validator;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
{
    private $validationRules = [
        'content' => 'max:1280|required'
    ];

    public function create(Request $request, $pageId)
    {
        $data = $request->only(
            'content'
        );

        $p = Page::find($pageId);
        if (empty($p)) {
            abort(404);
        }
        if (empty($p->commented)) {
            abort(404);
        }

        $data['page_id'] = $pageId;

        $validator = Validator::make($data, $this->validationRules);
        if ($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()], 200);
        }

        try {
            $comment = Comment::create($data);
            if (empty($comment->id)) {
                throw new \Exception("I cant get comment id");
            }
        } catch (\Exception $e) {
            Log::error('comment add ex: '.$e->getMessage().' line: '.$e->getLine().'  file: '.$e->getFile()); //.' for: '.var_export($data, true )
      return response()->json(['success'=> false, 'error'=> 'Add comment problem, details in the log file.'], 200); //.$e->getMessage()
        }

        return response()->json(['success'=> true]);
    }

    public function index(Request $request, $pageId)
    {
        $comments = Comment::where('page_id', $pageId)->orderby('created_at', 'desc')->get(['content'])->toArray();
        return response()->json(['success' => true, 'data'=> $comments], 200);
    }
}
