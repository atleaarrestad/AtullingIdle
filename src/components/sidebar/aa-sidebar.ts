import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../../../styles.js";
import { SiderBarItem } from "./aa-sidebar-item.js";
import { map } from "lit/directives/map.js";
import { IAccount } from "../../account/accountRepository.js";
import { AccountService } from "../../account/accountService.js";
import {
  InjectableElement,
  inject,
  injectableElement,
} from "@roenlie/mimic-lit/injectable";
import { containerModule } from "../../modules.js";

SiderBarItem;

@injectableElement("aa-sidebar", { modules: [containerModule] })
export class Siderbar extends InjectableElement {
  @property() name = "World";
  @inject(AccountService) accountService: AccountService;

  sidebarItems: ISidebarItem[] = [
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
    { text: "Combat", icon: "/icons/combat.svg", alt: "Combat", route: "/" },
    { text: "Joe Biden", icon: "/icons/empty.png", alt: "Combat", route: "/" },
  ];
  public override connectedCallback(): void {
    super.connectedCallback();
  }

  override render() {
    return html`
      <input
        @change="${this.load.bind(this)}"
        id="file"
        name="file"
        type="file"
      />
      <button @click="${this.reset.bind(this)}">RESET ACCOUNT</button>
      <button @click="${this.save.bind(this)}">Save</button>

      <div class="flexbox-column">
        <a href="/" class="atulling-logo">
          <h1>Atulling Idle</h1>
        </a>
        <hr />
        <div class="sidebar-item-list">
          ${map(
            this.sidebarItems,
            (item) => html`<aa-sidebar-item
              text=${item.text}
              icon=${item.icon}
              alt=${item.alt}
              route=${item.route}
            ></aa-sidebar-item>`
          )}
        </div>
        <hr />
      </div>
    `;
  }

  private save = () => {
    console.log(this.accountService.getAccount().money);
  };
  private load = (e: Event) => {
    let input: HTMLInputElement = e.currentTarget as object as HTMLInputElement;
    let file = input.files ? input.files[0] : null;
    if (!file) return;
  };
  private reset = () => {
    var newSave: IAccount = {
      money: 0,
    };
  };

  static override styles = [
    sharedStyles,
    css`
      :host {
        background-color: var(--sidebar-primary);
        width: 200px;
        height: 100vh;
      }
      * {
      }
      .flexbox-column {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .atulling-logo {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        flex-wrap: nowrap;
        place-content: center;
      }

      .sidebar-item-list {
        padding-top: 8px;
        padding-bottom: 8px;
        overflow-y: auto;
        height: 100%;
      }

      center-text {
        text-align: center;
      }
    `,
  ];
}

interface ISidebarItem {
  icon: string;
  alt: string;
  text: string;
  route: string;
}
