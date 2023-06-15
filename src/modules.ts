import { AccountService } from "./account/accountService.js";
import { AccountRepository } from "./account/accountRepository.js";
import { ContainerModule } from "@roenlie/mimic-lit/injectable";

export const containerModule = new ContainerModule(({ bind }) => {
  //bind($AccountService).to(AccountService).inSingletonScope();
  bind(AccountRepository).toSelf().inSingletonScope();
  bind(AccountService).toSelf().inSingletonScope();
});
