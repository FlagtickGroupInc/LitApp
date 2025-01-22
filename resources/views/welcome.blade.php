<html>
  <head>
    <title>LaraApp</title>
    <?php
      $manifestPath = public_path('build/manifest.json');
      $manifest = json_decode(file_get_contents($manifestPath), true);
    ?>
    <link rel="stylesheet" href="{{ asset('build/' . $manifest['resources/scss/app.scss']['file']) }}">
  </head>
  <body>
    <div id="app">
      <my-lit-component></my-lit-component>
    </div>
    <script type="module" src="{{ asset('build/' . $manifest['resources/js/app.js']['file']) }}"></script>
  </body>
</html>
