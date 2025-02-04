<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Editor</title>
    <?php
        $manifestPath = public_path('author/manifest.json');
        $manifest = json_decode(file_get_contents($manifestPath), true);
    ?>
    <link rel="stylesheet" href="{{ asset('/css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('author/' . $manifest['resources/scss/app.scss']['file']) }}">
    <style>
        body {
            font-family: 'Inter', Helvetica, Arial, sans-serif;
            display: flex;
            height: 100vh;
            overflow: hidden;
        }
        .toggle-btn {
            width: 30px;
            height: 30px;
            background-color: #222e3c;
            color: #fff;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: transform 0.3s ease, left 0.3s ease;
            position: absolute;
            top: 0;
            left: calc(0px - 15px);
            z-index: 1000;
            cursor: pointer;
        }
        .toggle-btn:hover {
            background-color: #fff;
            color: #222e3c;
        }
        .content {
            flex-grow: 1;
            background-color: #f5f5f5;
            padding: 20px;
            position: relative;
        }
    </style>
</head>
<body data-mode="author">
    <fgcore-sidebar></fgcore-sidebar>
    <fgcore-area></fgcore-area>
    <script type="module" src="{{ asset('author/' . $manifest['resources/js/app.js']['file']) }}"></script>
    <script>
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            const toggleBtn = document.querySelector('.toggle-btn');
            sidebar.classList.toggle('collapsed');
            toggleBtn.innerHTML = sidebar.classList.contains('collapsed') ? '&#10095;' : '&#10094;';
        }

        function searchComponents() {
            let input = document.querySelector(".sidebar__search-input").value.toLowerCase();
            let items = document.querySelectorAll(".sidebar-item");

            items.forEach(item => {
                let text = item.querySelector("a span")?.textContent.toLowerCase() || "";
                if (text.includes(input)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        }

        window.addEventListener('DOMContentLoaded', () => {
            const dropArea = document.querySelector('drop-area');
            if (dropArea) {
                const observer = new MutationObserver(mutationsList => {
                    mutationsList.forEach(mutation => {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === Node.COMMENT_NODE) {
                                node.remove();
                            }
                        });

                        mutation.removedNodes.forEach(node => {
                            if (node.nodeType === Node.COMMENT_NODE) {
                                node.remove();
                            }
                        });
                    });
                });

                observer.observe(dropArea.shadowRoot || dropArea, {
                    childList: true,
                    subtree: true,
                });
            }
        });

    </script>
</body>
</html>
