import { IAccount } from "./accountRepository";

export const loadAccount = (account: IAccount) => {
  localStorage.setItem("account", JSON.stringify(account));
};
