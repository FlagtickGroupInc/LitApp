import { LitElement, html, css } from 'lit';

class MyLitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background: #f0f0f0;
    }
  `;

  render() {
    return html`
      <h1>Hello from Lit!</h1>
    `;
  }
}

customElements.define('my-lit-component', MyLitComponent);
