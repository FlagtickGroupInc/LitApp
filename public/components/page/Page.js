/**
 * Question: If we have body, sidebar and content has driven CSS.
 * What those driven CSS for tag body, tag sidebar and tag content?
 */
// import { LitElement, html, css } from 'lit';
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/npm/lit@3.1.0/+esm';

class Page extends LitElement {
    static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  `;

    static properties = {
        title: { type: String },
        description: { type: String },
    };

    constructor() {
        super();
        this.title = '';
        this.description = '';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <h1>${this.title}</h1>
            <p>${this.description}</p>
            <container-component>
              <content-component></content-component>
            </container-component>
        `;
    }
}

if (!customElements.get('page-component')) {
    customElements.define('page-component', Page);
}

export default Page;
