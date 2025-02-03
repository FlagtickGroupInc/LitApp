import {LitElement, html, css, unsafeCSS} from 'lit';
import container from './container.scss';

class Container extends LitElement {

    static styles = css`
        ${unsafeCSS(container)}
    `;

    constructor() {
        super();
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
            <div class="container">
                <slot>Hello World</slot>
            </div>
        `
    };
}

customElements.define('container-component', Container);
