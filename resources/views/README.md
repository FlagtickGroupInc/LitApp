```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $data['title'] }}</title>
    <?php
        $manifestPath = public_path('build/manifest.json');
        $manifest = json_decode(file_get_contents($manifestPath), true);
    ?>
    <link rel="stylesheet" href="{{ asset('build/' . $manifest['resources/scss/app.scss']['file']) }}">
</head>
<body>
    <page-component
        title="{{ $data['title'] }}"
        description="{{ $data['description'] }}">
    </page-component>
    <script type="module" src="{{ asset('build/' . $manifest['resources/js/app.js']['file']) }}"></script>
</body>
</html>
```
## 1. <page-component> in welcome.blade.php:

```This tag represents a reference to a JavaScript component (likely Vue.js, React, etc.) named Page.js.
When rendered in the browser, it works client-side because the actual logic of the component is in Page.js. The browser dynamically renders it.
The Challenge:

If you directly place <page-component> in welcome.blade.php, it becomes static in terms of structure unless modified via code.
If you want to make this more dynamic, like allowing users to drag and drop components (e.g., add/remove/customize parts of the page), then static placement isn't sufficient.
The Solution - Using a Builder:
```

## 2. A builder tool (like editor.blade.php) could be created. This builder:
```Acts as an interface where you can drag and drop components like Page.js into the desired structure (e.g., welcome.blade.php).
Dynamically updates the DOM or generates the correct placement of these components.
This could be achieved by wrapping logic in something like an SidebarEditor.js script that handles the drag-and-drop functionality, saving the layout, and dynamically injecting it into welcome.blade.php.
The Key Idea:

Instead of hardcoding <page-component> in welcome.blade.php, use a drag-and-drop builder interface (editor.blade.php) to design the structure.
This builder would allow the layout (or even the logic) to be exported and rendered properly in welcome.blade.php. 
```

## 3
```html
<div class="sidebar">
    <div class="simplebar-wrapper" style="margin: 0;">
 we have simplebar-wrapper. How to named it to another name to easy to css for it?
```

## 4
How can I separate concerns and structure the CSS for the following element to improve maintainability and reduce redundancy?
Element:
```html
<input type="text" class="search-box" placeholder="Search menu..." onkeyup="searchMenu()">
```
and current CSS:
```css
.search-box {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
}
```
How can I refactor this to follow multiple hierarchical structure and make the driven CSS more modular and reusable?

## 5&6 to build "BUILDER"
Leverage it to build content component that allow drag/drop Lit component from sidebar menu on left
```typescript
import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';

class LiDragdrop extends LitElement {

    static styles = css
        :host   { display: block }
        :host b { display: inline-block }
    

    constructor() {
        super()
    }

    connectedCallback() {
        super.connectedCallback()

        this.setAttribute('draggable', 'true')

        this.addEventListener('dragstart',  this.onDragStart, {passive: false})
        this.addEventListener('drag',       this.onDrag)
        this.addEventListener('dragend',    this.onDragEnd)
    }

    onDragStart(evt) {
        evt.preventDefault()
        evt.dataTransfer.effectAllowed = 'move'
        evt.dataTransfer.setData('text/html', this.outerHTML)
        console.log(evt.type, ${evt.target.localName} (${evt.target.textContent}), evt)
    }

    // fires repeatedly while dragging
    onDrag(evt) {
        evt.preventDefault()
        console.log(evt.type, ${evt.target.localName} (${evt.target.textContent}), evt)
    }

    // always fires, even for unsuccessful drops
    onDragEnd(evt) {
        console.log(evt.type, evt.target.localName, evt)
    }

    render() {
        return html<b>⠿</b><slot></slot>
    }
}
```
customElements.define('li-dragdrop', LiDragdrop)?

ANSWER:
- A sidebar containing draggable components.
- A drop zone (content area) where components can be placed dynamically.
- Proper event handling to support the drag-and-drop experience.

A sidebar containing draggable components. Does its element as below
`
```typescript
import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';
import sidebar from './../../scss/components/sidebar.scss';

class SidebarEditor extends LitElement {
    static properties = {
        page: { type: String },
        content: { type: String },
        components: { type: Object },
        searchQuery: { type: String },
    };

    static styles = css`
        ${unsafeCSS(sidebar)}
    `;

    constructor() {
        super();
        this.page = '';
        this.content = '';
        this.components = {};
        this.searchQuery = '';
    }

    createRenderRoot() {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this.renderLightDOM();
    }

    renderLightDOM() {
        this.innerHTML = `
            <div class="sidebar">
                <div class="sidebar-wrapper" style="margin: 0;">
                    <div class="sidebar-mask">
                        <div class="sidebar-offset" style="right: 0; bottom: 0;">
                            <div class="sidebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                                 style="height: 100%; overflow: hidden scroll;">
                                <flagtickgroup-core-admin-search></flagtickgroup-core-admin-search>
                                <div class="sidebar-content" style="padding: 0;">
                                    <ul class="sidebar-nav">
                                        <li>Menu Item 1</li>
                                        <li>Menu Item 2</li>
                                        <li>Menu Item 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('flagtickgroup-core-admin-sidebar', SidebarEditor);
```
` to be corrected draggable components?
