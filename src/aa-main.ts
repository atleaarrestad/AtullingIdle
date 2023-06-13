import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../styles";

@customElement("aa-main")
export class Main extends LitElement {
  @property() name = "World";

  render() {
    return html` <h1>i am main screen</h1> `;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        background-color: var(--primary);
      }
    `,
  ];
}

//clientid          964622997149 - fbcuj2e5amrmv1veeq4rbc5n80ktu4bd.apps.googleusercontent.com;
//client secret     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
