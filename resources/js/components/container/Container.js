import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import contentData from './style.json';

class Container extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
    `;

    constructor() {
        super();
        this.containerStyle = this.transformStyles(contentData.container);
    }

    /**
     * Transforms camelCase JSON keys to kebab-case for valid CSS.
     * @param {Object} styles - JSON object with styles.
     * @returns {Object} - Valid CSS style object.
     */
    transformStyles(styles) {
        const transformed = {};
        for (const [key, value] of Object.entries(styles)) {
            const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            transformed[kebabKey] = value;
        }
        return transformed;
    }

    render() {
        return html`
            <div class="container" style="${styleMap(this.containerStyle)}">
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('container-component', Container);
