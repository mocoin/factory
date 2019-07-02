import * as pecorinoFactory from '@pecorino/factory';

import AccountType from '../../../../accountType';
import * as ActionFactory from '../../../../action';
import ActionType from '../../../../actionType';
import { IAccount } from '../../../../ownershipInfo';
import { ITransaction as IReturnCoinTransaction } from '../../../../transaction/returnCoin';
import { ITransaction as IWithdrawCoinTransaction } from '../../../../transaction/withdrawCoin';
import * as AuthorizeActionFactory from '../../../authorize';
import AuthorizeWithdrawActionObjectType from '../objectType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 承認結果
 * 実体としてはPecorino出金取引
 */
export interface IResult {
    pecorinoTransaction: pecorinoFactory.transaction.withdraw.ITransaction<AccountType.Coin>;
    pecorinoEndpoint: string;
    amount: number;
}
export type ILocation = IAccount<AccountType.Coin>;
/**
 * 承認対象
 */
export interface IObject {
    typeOf: AuthorizeWithdrawActionObjectType;
    amount: number;
    fromLocation: ILocation;
    notes: string;
}
export type IPurpose = IReturnCoinTransaction | IWithdrawCoinTransaction;
export type IError = any;
/**
 * コイン口座出金承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}
/**
 * コイン口座出金承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
