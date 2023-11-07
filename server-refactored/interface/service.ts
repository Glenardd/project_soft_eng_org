import { IAccount } from "../models/account";

interface BaseAccountRequest {
  username: IAccount["username"];
}

export interface CreateAccountParameter extends BaseAccountRequest {
  email: IAccount["email"];
  password: string;
}

export interface UpdateAccountStarsParameter extends BaseAccountRequest {
  hasStarProtection: boolean;
  didWin: boolean;
  stars: IAccount["stars"];
}

export interface UpdateAccountPasswordParameter extends BaseAccountRequest {
  newPassword: string;
}

export interface UpdateAccountGoldParameter extends BaseAccountRequest {
  didWin: boolean;
  gold: IAccount["gold"];
}

export interface SendEmailNotifParameter {
  email: IAccount["email"];
}
