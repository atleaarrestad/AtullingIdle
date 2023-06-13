import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../styles";

@customElement("aa-loginscreen")
export class LoginScreen extends LitElement {
  @property() name = "World";

  render() {
    return html`
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <h1>i am loginscreen</h1>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    `;
  }

  static styles = [
    sharedStyles,
    css`
      :host {
        background-color: var(--bg);
      }
    `,
  ];
}

//clientid          964622997149 - fbcuj2e5amrmv1veeq4rbc5n80ktu4bd.apps.googleusercontent.com;
//client secret     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
