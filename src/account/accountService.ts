import { IAccount } from "./accountRepository.js";
import { AccountRepository } from "./accountRepository.js";
import { inject, injectable } from "inversify";

@injectable()
export class AccountService {
  constructor(
    @inject(AccountRepository) private _accountRepository: AccountRepository
  ) {}
  public getAccount(): IAccount {
    return this._accountRepository.getAccount();
  }
  public resetAccount() {
    this._accountRepository.resetAccount();
  }
}
