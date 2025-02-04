import { LitElement, html, css, noChange } from 'lit';
import { unsafeCSS } from 'lit';
import droparea from './../../scss/components/droparea.scss';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class DynamicComponent extends LitElement {
    static styles = css`${unsafeCSS(droparea)}`;

    static properties = {
        droppedItems: { type: Array },
        componentMapping: { type: Object },
        isPublishMode: { type: Boolean },
    };

    constructor() {
        super();
        this.droppedItems = [];
        this.isPublishMode = document.body.dataset.mode === 'publish';

        this.componentMapping = {
            'Page': '/components/page/Page.js',
            'Fragment': '/components/fragment/Fragment.js',
            'Container': '/components/container/Container.js'
        };
    }

    render() {
        return html`<div class="drop-area" @dragover="${this.handleDragOver}" @drop="${this.handleDrop}">
            ${this.droppedItems.length ? this.droppedItems.map(item => item ? html`${unsafeHTML(item)}` : noChange) : noChange}
        </div>`;
    }

    createRenderRoot() {
        const style = document.createElement('style');
        style.textContent = droparea;
        document.head.appendChild(style);
        return this;
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    async handleDrop(e) {
        e.preventDefault();
        const componentName = e.dataTransfer.getData('text/plain');

        if (componentName && this.componentMapping[componentName]) {
            const modulePath = this.componentMapping[componentName];
            try {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = modulePath;
                document.body.appendChild(script);

                script.onload = async () => {
                    const tagName = componentName.toLowerCase() + '-component';

                    if (!customElements.get(tagName)) {
                        console.error(`${tagName} component not found after script load`);
                        return;
                    }

                    const element = document.createElement(tagName);

                    if (this.isPublishMode) {
                        // TODO
                    } else {
                        this.droppedItems = [...this.droppedItems, element.outerHTML];
                        this.requestUpdate();
                    }
                };

                script.onerror = () => console.error(`Failed to load ${modulePath}`);
            } catch (error) {
                console.error('Error loading component:', error);
            }
        }
    }
}

customElements.define('fgcore-area', DynamicComponent);
