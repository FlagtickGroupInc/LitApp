<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EditorController extends Controller
{
    public function edit($page): Factory|View|Application
    {
        $bladePath = resource_path("views/{$page}.blade.php");
        if (!file_exists($bladePath)) {
            abort(404, 'Page not found.');
        }

        $content = file_get_contents($bladePath);

        return view('editor', [
            'page' => $page,
            'content' => htmlspecialchars($content)
        ]);
    }

    public function save(Request $request): JsonResponse
    {
        $page = $request->input('page');
        $content = $request->input('content');

        $bladePath = resource_path("views/{$page}.blade.php");

        if (!file_exists($bladePath)) {
            return response()->json(['message' => 'Page not found.'], 404);
        }

        file_put_contents($bladePath, html_entity_decode($content));

        return response()->json(['message' => 'Page updated successfully.']);
    }

}
