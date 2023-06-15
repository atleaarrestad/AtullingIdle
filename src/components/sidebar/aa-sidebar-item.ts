import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../../../styles";

@customElement("aa-sidebar-item")
export class SiderBarItem extends LitElement {
  @property() icon = "/icons/empty.png";
  @property() alt = "empty icon sadface";
  @property() text = "Empty text";
  @property() route = "/placeholder";

  render() {
    return html`
      <a href="${this.route}" class="flexbox-row">
        <img src="${this.icon}" alt="${this.alt}" />
        <span>${this.text}</span>
      </a>
    `;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
      }
      .flexbox-row {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
      }
      img {
        width: 24px;
        height: 24px;
      }
      span {
        padding-left: 8px;
        font-size: 18px;
        font-family: monospace;
      }
      a:hover {
        background-color: #aaa;
      }
      a {
        padding-left: 8px;
      }
    `,
  ];
}
