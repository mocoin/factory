import * as pecorinoFactory from '@motionpicture/pecorino-factory';

import * as ActionFactory from '../../../../action';
import ActionType from '../../../../actionType';
import { IPaymentMethod } from '../../../../ownershipInfo';
import PaymentMethodType from '../../../../paymentMethodType';
import { ITransaction as IBuyCoinTransaction } from '../../../../transaction/buyCoin';
import * as AuthorizeActionFactory from '../../../authorize';
import AuthorizeWithdrawActionObjectType from '../objectType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 承認結果
 * 実体としてはPecorino出金取引
 */
export interface IResult {
    pecorinoTransaction: pecorinoFactory.transaction.withdraw.ITransaction;
    pecorinoEndpoint: string;
    amount: number;
}
export type ILocation = IPaymentMethod<PaymentMethodType>;
/**
 * 承認対象
 * 実体としてはPecorino出金取引オブジェクト
 */
export interface IObject {
    typeOf: AuthorizeWithdrawActionObjectType;
    amount: number;
    fromLocation: ILocation;
    notes: string;
}
export type IPurpose = IBuyCoinTransaction;
export type IError = any;
/**
 * 銀行口座出金承認アクション属性
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
/**
 * 銀行口座出金承認アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
