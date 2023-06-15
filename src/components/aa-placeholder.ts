import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../../styles";

@customElement("aa-placeholder")
export class Placeholder extends LitElement {
  render() {
    return html` <h1>HELLO I AM PLACEHOLDER!!!! LMAO I AM empty</h1> `;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        background-color: red;
      }
    `,
  ];
}

//clientid          964622997149 - fbcuj2e5amrmv1veeq4rbc5n80ktu4bd.apps.googleusercontent.com;
//client secret     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
