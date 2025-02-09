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
{{--    <link rel="stylesheet" href="{{ asset('author/' . $manifest['resources/scss/app.scss']['file']) }}">--}}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap">
    <style>
        body {
            font-family: 'Inter', Helvetica, Arial, sans-serif;
            display: flex;
            height: 100vh;
            font-size: 0.875rem;
            overflow: hidden;
        }

        .sidebar {
            width: 260px;
            background-color: #222e3c;
            color: #fff;
            display: flex;
            flex-direction: column;
            padding: 20px;
            transition: width 0.3s ease;
            position: relative;
        }

        .content {
            flex-grow: 1;
            background-color: #f5f5f5;
            padding: 20px;
            position: relative;
        }

        .sidebar.collapsed {
            width: 80px;
        }

        .sidebar.collapsed .sidebar-link[data-toggle="collapse"]::after {
            display: none;
        }

        .sidebar.collapsed .sidebar-brand span,
        .sidebar.collapsed h2 {
            display: none;
            opacity: 0;
        }

        .sidebar.collapsed .sidebar-brand img {
            display: block;
            width: 56px;
            height: auto;
            margin: auto;
        }

        .sidebar.collapsed .menu-item span {
            opacity: 0;
        }

        .sidebar.collapsed .sidebar-brand {
            padding: 0.15rem 0.15rem;
        }

        .sidebar.collapsed + .content .toggle-btn,
        .sidebar.collapsed .toggle-btn {
            left: calc(0px - 15px);
        }

        .sidebar.collapsed .sidebar-header {
            padding: 0;
            margin: 0 auto 16px;
            text-align: center;
        }

        .sidebar.collapsed .sidebar-header:not(:first-of-type) {
            padding: 0;
            margin: 8px auto;
            text-align: center;
        }

        .sidebar.collapsed .sidebar-link span {
            display: none;
        }

        .sidebar.collapsed .icon {
            stroke-width: 2;
            height: 24px;
            width: 24px;
        }

        .sidebar.collapsed .sidebar-link {
            padding: 0.625rem 0.625rem;
            text-align: center;
        }

        .sidebar.collapsed a.sidebar-link svg {
            margin-right: 5px;
        }

        .sidebar.collapsed .submenu {
            position: absolute;
            left: 86px;
            width: 220px;
            background: white;
            box-shadow: 0 .5rem 3rem .5rem rgba(0, 0, 0, .05);
            z-index: 1000;
        }

        .sidebar.collapsed .submenu .sidebar-item {
            margin-left: 0;
            text-align: start;
            align-items: flex-start;
            display: flex;
        }

        .sidebar.collapsed .submenu .sidebar-item .sidebar-link {
            background: transparent;
            border-left: 0;
            color: #adb5bd;
            font-size: 90%;
            font-weight: 400;
        }

        .sidebar.collapsed .submenu .sidebar-item .sidebar-link:hover {
            color: #518be1;
            margin-left: 2px;
        }

        .sidebar h2 {
            text-align: center;
            margin-bottom: 30px;
            transition: opacity 0.3s ease;
        }

        .sidebar-nav {
            flex-grow: 1;
            list-style: none;
            margin-bottom: 0;
            padding-left: 0;
        }

        .sidebar-header {
            background: transparent;
            color: #ced4da;
            font-size: 0.75rem;
            padding: 1.5rem 1.5rem 0.375rem;
        }

        .sidebar-brand {
            color: #f8f9fa;
            display: flex;
            align-items: center;
            width: 100%;
            margin-left: 4px;
        }

        .sidebar-brand img {
            width: 56px;
            height: auto;
        }

        .sidebar-brand:hover {
            color: #f8f9fa;
            text-decoration: none;
        }

        .sidebar-brand span {
            font-size: 165%;
        }

        .sidebar-nav .sidebar-item.active > .sidebar-link:hover {
            background: linear-gradient(90deg, rgba(59, 125, 221, 0.1), rgba(59, 125, 221, 0.088) 50%, transparent);
            border-left-color: #3b7ddd;
            color: #e9ecef;
        }

        .submenu .sidebar-item .sidebar-link {
            font-size: 90%;
        }

        .submenu .sidebar-item .sidebar-link::before {
            content: "→";
            display: inline-block;
            left: -14px;
            position: relative;
            transform: translateX(0);
            transition: all .1s ease;
        }

        .submenu .sidebar-item .sidebar-link:hover {
            color: #518be1;
            margin-left: 2px;
        }

        .submenu {
            list-style: none;
            padding-left: 32px;
            display: none;
            transition: all 0.3s ease;
        }

        .sidebar-link[data-toggle="collapse"]::after {
            content: "";
            border: solid;
            border-width: 0 0.1rem 0.1rem 0;
            display: inline-block;
            padding: 2px;
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
            transition: transform 0.3s ease;
        }

        .sidebar-item.active > .sidebar-link::after {
            transform: translateY(-100%) rotate(225deg);
            top: 24px;
        }

        .sidebar-item.active > .submenu {
            display: block;
        }

        .sidebar-link,
        a.sidebar-link {
            background: #222e3c;
            border-left: 3px solid transparent;
            color: rgba(233, 236, 239, 0.5);
            cursor: pointer;
            display: block;
            font-weight: 400;
            padding: 0.625rem 1.625rem;
            position: relative;
            text-decoration: none;
            transition: background 0.1s ease-in-out;
        }

        .sidebar-link i,
        .sidebar-link svg,
        a.sidebar-link i,
        a.sidebar-link svg {
            color: rgba(233, 236, 239, 0.5);
            margin-right: 0.75rem;
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
            top: 10px;
            left: calc(0px - 15px);
            z-index: 1000;
            cursor: pointer;
        }

        .toggle-btn:hover {
            background-color: #fff;
            color: #222e3c;
        }

        .sidebar-wrapper {
            height: inherit;
            max-height: inherit;
            max-width: inherit;
            overflow: hidden;
            width: inherit;
        }

        .sidebar-content-wrapper {
            -ms-overflow-style: none;
            box-sizing: border-box !important;
            direction: inherit;
            display: block;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            position: relative;
            scrollbar-width: none;
            width: auto;
        }

        .sidebar-mask,
        .sidebar-offset {
            bottom: 0;
            left: 0;
            margin: 0;
            padding: 0;
            position: absolute;
            right: 0;
            top: 0;
        }

        .sidebar-mask {
            direction: inherit;
            height: auto;
            width: auto;
            z-index: 10;
        }

        .sidebar-content {
            display: flex;
            flex-direction: column;
            height: 100vh;
            padding-bottom: 0 !important;
        }

        .text-middle {
            vertical-align: middle !important;
        }

        .icon {
            stroke-width: 2;
            height: 18px;
            width: 18px;
        }
    </style>
</head>
<body>
<div class="sidebar">
    <div class="sidebar-wrapper">
        <div class="sidebar-mask">
            <div class="sidebar-offset">
                <div class="sidebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content">
                    <div class="sidebar-content">
                        <a class="sidebar-brand" href="javascript:void(0);">
                            <img src="{{ asset('logo/logo-short.png') }}" alt="logo-short" />
                            <span class="text-middle">Flagtick Group</span>
                        </a>

                        <ul class="sidebar-nav">
                            <li class="sidebar-header">
                                Pages
                            </li>
                            <li class="sidebar-item">
                                <a href="javascript:void(0);" class="sidebar-link toggle-submenu" data-toggle="collapse">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" class="icon icon-sliders text-middle">
                                        <line x1="4" y1="21" x2="4" y2="14"></line>
                                        <line x1="4" y1="10" x2="4" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12" y2="3"></line>
                                        <line x1="20" y1="21" x2="20" y2="16"></line>
                                        <line x1="20" y1="12" x2="20" y2="3"></line>
                                        <line x1="1" y1="14" x2="7" y2="14"></line>
                                        <line x1="9" y1="8" x2="15" y2="8"></line>
                                        <line x1="17" y1="16" x2="23" y2="16"></line>
                                    </svg>
                                    <span class="text-middle">Dashboards</span>
                                </a>

                                <ul class="submenu">
                                    <li class="sidebar-item"><a href="/" class="sidebar-link">Analytics</a></li>
                                    <li class="sidebar-item"><a href="/dashboard-ecommerce" class="sidebar-link">E-Commerce</a></li>
                                    <li class="sidebar-item"><a href="/dashboard-crypto" class="sidebar-link">Crypto</a></li>
                                </ul>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="pages-profile.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-user text-middle">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <span class="text-middle">Profile</span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="pages-sign-in.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-log-in text-middle">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                        <polyline points="10 17 15 12 10 7"></polyline>
                                        <line x1="15" y1="12" x2="3" y2="12"></line>
                                    </svg>
                                    <span class="text-middle">Sign In</span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="pages-sign-up.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-user-plus text-middle">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                    <span class="text-middle">Sign Up</span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="pages-blank.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-book text-middle">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                    <span class="text-middle">Blank</span>
                                </a>
                            </li>

                            <li class="sidebar-header">
                                Tools &amp; Components
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="ui-buttons.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-square text-middle">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    </svg>
                                    <span class="text-middle">Buttons</span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="ui-forms.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-check-square text-middle">
                                        <polyline points="9 11 12 14 22 4"></polyline>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                    </svg>
                                    <span class="text-middle">Forms</span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" href="ui-cards.html">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="icon icon-grid text-middle">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg>
                                    <span class="text-middle">Cards</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content">
    <button class="toggle-btn" onclick="toggleSidebar()">&#10094;</button>
    <h1>Main Content Area</h1>
    <p>This is where your content goes.</p>
</div>
<script type="module" src="{{ asset('author/' . $manifest['resources/js/app.js']['file']) }}"></script>
<script>
    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.querySelector('.toggle-btn');
        sidebar.classList.toggle('collapsed');
        toggleBtn.innerHTML = sidebar.classList.contains('collapsed') ? '&#10095;' : '&#10094;';
        if (sidebar.classList.contains('collapsed')) {
            const activeItem = document.querySelector('.sidebar-item.active');
            if (activeItem) {
                const submenu = activeItem.querySelector('.submenu');

                if (submenu) {
                    const offsetTop = activeItem.getBoundingClientRect().top;

                    submenu.style.top = `${offsetTop}px`;
                    submenu.style.left = `86px`;
                    submenu.style.display = 'block';
                }
            }
        }
    }

    function filterComponents() {
        const searchQuery = document.querySelector('.search-box').value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(item => {
            const itemName = item.getAttribute('data-name').toLowerCase();
            if (itemName.includes(searchQuery)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('.toggle-submenu').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const parentItem = this.parentElement;
            const sidebar = document.querySelector('.sidebar');
            const submenu = parentItem.querySelector('.submenu');

            if (sidebar.classList.contains('collapsed')) {
                parentItem.classList.toggle('active');

                const offsetTop = this.getBoundingClientRect().top;
                submenu.style.top = `${offsetTop}px`;
                submenu.style.left = `86px`;
            } else {
                parentItem.classList.toggle('active');
                document.querySelectorAll('.sidebar-item').forEach(otherItem => {
                    if (otherItem !== parentItem) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });

</script>
</body>
</html>
