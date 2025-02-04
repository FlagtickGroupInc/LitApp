/*
 * Focus on neutral tones, high contrast for readability, and soft, non-distracting colors.
 */

import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';
import sidebar from './../../scss/components/search.scss';

class SearchComponent extends LitElement {
    static properties = {
        page: { type: String },
        content: { type: String },
        components: { type: Object },
        searchQuery: { type: String },
    };

    static renderOptions = {
        renderIntoShadowRoot: true
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
            <div class="sidebar__search">
                <input type="text" class="sidebar__search-input" placeholder="Search component..." onkeyup="searchComponents()">
            </div>
        `;
    }
}

customElements.define('flagtickgroup-core-admin-search', SearchComponent);

