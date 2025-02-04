import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';
import sidebar from './../../scss/components/sidebar.scss';

class DraggedComponent extends LitElement {
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
                                    <ul class="sidebar-nav">
                                        ${this.menuItems.map(
                                            (item, index) => `
                                                <li class="sidebar-item draggable-item ${index === 0 ? 'active' : ''}" draggable="true" data-item="${item}">
                                                    <a class="sidebar-link" href="${item.toLowerCase()}.html">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-sliders text-middle">
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
                                                        <span class="text-middle">${item}</span>
                                                    </a>
                                                </li>
                                            `
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

customElements.define('dragged-component', DraggedComponent);
