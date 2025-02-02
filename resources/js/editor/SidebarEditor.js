import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';
import sidebar from './../../scss/components/sidebar.scss';

class SidebarEditor extends LitElement {
    static properties = {
        menuItems: { type: Array },
    };

    static styles = css`
        ${unsafeCSS(sidebar)}
    `;

    constructor() {
        super();
        this.menuItems = ['Page', 'Fragment', 'Container'];
        this.componentMapping = {
            'Page': './components/page/Page.js',
            'Fragment': './components/fragment/Fragment.js',
            'Container': './components/container/Container.js'
        };
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
            <div class="sidebar-wrapper">
                <div class="sidebar-mask">
                    <div class="sidebar-offset">
                        <div class="sidebar-content-wrapper">
                            <flagtickgroup-core-admin-search></flagtickgroup-core-admin-search>
                            <div class="sidebar-content">
                                <ul class="sidebar-nav" id="sidebar-nav">
                                    ${this.menuItems.map(
                                        (item) => `<li class="draggable-item" draggable="true" data-item="${item}">${item}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.querySelectorAll('.draggable-item').forEach(item => {
            item.addEventListener('dragstart', (e) => this.handleDragStart(e, item.getAttribute('data-item')));
        });
    }

    handleDragStart(e, item) {
        e.dataTransfer.setData('text/plain', item);
        e.dataTransfer.effectAllowed = 'move';
    }
}

customElements.define('flagtickgroup-core-admin-sidebar', SidebarEditor);
