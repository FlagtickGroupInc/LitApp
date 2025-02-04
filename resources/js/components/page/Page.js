/**
 * Question: If we have body, sidebar and content has driven CSS.
 * What those driven CSS for tag body, tag sidebar and tag content?
 */
import { LitElement, html, css } from 'lit';

class Page extends LitElement {
    static styles = css`
    :host {
      display: block;
    }
  `;

    static properties = {
    };

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <dynamic-component></dynamic-component>
        `;
    }
}

customElements.define('page-component', Page);
