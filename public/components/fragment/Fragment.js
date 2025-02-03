import { LitElement, html, css } from 'lit';

class Fragment extends LitElement {

    static styles = css`
        :host {
          display: block;
          background-color: #f4f4f4;
          padding: 20px;
          border-radius: 8px;
        }
    `;

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
          <div class="content">
            <p>This is the content area inside the container.</p>
          </div>
        `;
        }
}

customElements.define('content-component', Fragment);
