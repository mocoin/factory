import * as pecorinoFactory from '@pecorino/factory';

import AccountType from '../../../../accountType';
import * as ActionFactory from '../../../../action';
import ActionType from '../../../../actionType';
import { AccountGoodType, IAccount } from '../../../../ownershipInfo';
import { ITransaction as IBuyCoinTransaction } from '../../../../transaction/buyCoin';
import { ITransaction as IDepositCoinTransaction } from '../../../../transaction/depositCoin';
import * as AuthorizeActionFactory from '../../../authorize';
import AuthorizeDepositActionObjectType from '../objectType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 承認結果
 * 実体としてはPecorino入金取引
 */
export interface IResult {
    pecorinoTransaction: pecorinoFactory.transaction.deposit.ITransaction<AccountType.Coin>;
    pecorinoEndpoint: string;
    amount: number;
}
export type ILocation = IAccount<AccountGoodType.CoinAccount>;
/**
 * 承認対象
 */
export interface IObject {
    typeOf: AuthorizeDepositActionObjectType;
    amount: number;
    toLocation: ILocation;
    notes: string;
}
export type IPurpose = IDepositCoinTransaction | IBuyCoinTransaction;
export type IError = any;
/**
 * コイン口座入金承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}
/**
 * コイン口座入金承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
