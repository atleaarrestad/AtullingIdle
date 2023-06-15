import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../styles";

@customElement("aa-main")
export class Main extends LitElement {
  @property() name = "World";

  render() {
    return html`
      <h1>i am main screen</h1>
      <hr />
      <h2>Sjoggolade 200 grams</h2>
      <h2>Red byul</h2>
      <h2>bepis</h2>
      <h2>You have played for 5600 hours!</h2>
    `;
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
