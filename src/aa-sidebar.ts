import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../styles";

@customElement("aa-sidebar")
export class SiderBar extends LitElement {
  @property() name = "World";

  render() {
    return html` <h1>i am sidebar</h1> `;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        background-color: var(--sidebar-primary);
        width: 200px;
        height: 100vh;
      }
    `,
  ];
}

//clientid          964622997149 - fbcuj2e5amrmv1veeq4rbc5n80ktu4bd.apps.googleusercontent.com;
//client secret     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
