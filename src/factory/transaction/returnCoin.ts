import { IAction as IAuthorizeDepositCointAccountAction } from '../action/authorize/deposit/account/coin';
import { IAction as IAuthorizeWithdrawBankAccountPaymentAction } from '../action/authorize/withdraw/paymentMethod/bankAccount';
import * as MoneyTransferActionFactory from '../action/transfer/moneyTransfer';
import { IExtendId } from '../autoGenerated';
import OrganizationType from '../organizationType';
import { AccountGoodType, IAccount, IPaymentMethod } from '../ownershipInfo';
import PaymentMethodType from '../paymentMethodType';
import PersonType from '../personType';
import * as TransactionFactory from '../transaction';
import TransactionType from '../transactionType';

/**
 * 取引開始パラメーターインターフェース
 */
export type IStartParams = TransactionFactory.IStartParams<TransactionType.ReturnCoin, IAgent, IRecipient, IObject>;
export interface IRecipient {
    typeOf: OrganizationType | PersonType;
    id?: string;
    name: string;
    url?: string;
}
export interface IAgent {
    typeOf: OrganizationType | PersonType;
    id?: string;
    name: string;
    url?: string;
}
export type IResult = any;
/**
 * エラーインターフェース
 */
export type IError = any;
export type IFromLocation = IAccount<AccountGoodType.CoinAccount>;
export type IToLocation = IPaymentMethod<PaymentMethodType>;
export type IAuthorizeAction = IAuthorizeDepositCointAccountAction | IAuthorizeWithdrawBankAccountPaymentAction;
/**
 * 取引対象物インターフェース
 */
export interface IObject {
    amount: number;
    fromLocation: IFromLocation;
    toLocation: IToLocation;
    notes: string;
    authorizeActions: IAuthorizeAction[];
}
export interface IPotentialActions {
    moneyTransfer: MoneyTransferActionFactory.IAttributes;
}
/**
 * コイン転送取引属性インターフェース
 */
export interface IAttributes extends TransactionFactory.IAttributes<IStartParams, IResult, IError, IPotentialActions> {
}
/**
 * コイン転送取引インターフェース
 */
export type ITransaction = IExtendId<IAttributes>;
