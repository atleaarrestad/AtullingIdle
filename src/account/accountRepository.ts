import { injectable } from "inversify";

@injectable()
export class AccountRepository {
  private _account: IAccount;
  constructor() {
    this._account = this.createNewUser();
  }

  public getAccount() {
    return this._account;
  }

  public resetAccount() {
    this._account = this.createNewUser();
  }

  private createNewUser(): IAccount {
    return {
      money: 69,
    };
  }
}
export interface IAccount {
  money: number;
}
