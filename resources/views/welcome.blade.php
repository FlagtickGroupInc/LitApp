<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $data['title'] }}</title>
    <?php
        $manifestPath = public_path('author/manifest.json');
        $manifest = json_decode(file_get_contents($manifestPath), true);
    ?>
    <link rel="stylesheet" href="{{ asset('author/' . $manifest['resources/scss/app.scss']['file']) }}">
</head>
<body>
    <page-component
        title="{{ $data['title'] }}"
        description="{{ $data['description'] }}">
    </page-component>
    <script type="module" src="{{ asset('author/' . $manifest['resources/js/app.js']['file']) }}"></script>
</body>
</html>
