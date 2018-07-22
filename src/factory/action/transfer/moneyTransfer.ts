/**
 * コイン転送アクションファクトリー
 */
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { AccountGoodType, IAccount, IPaymentMethod } from '../../ownershipInfo';
import PaymentMethodType from '../../paymentMethodType';
import TransactionType from '../../transactionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
export enum LocationType {
    Anonymous = 'Anonymous',
    PaymentMethod = 'PaymentMethod',
    CoinAccount = 'CoinAccount'
}
/**
 * 口座以外の匿名場所インターフェース
 */
export interface IAnonymousLocation {
    typeOf: LocationType.Anonymous;
    id?: string;
    name?: string;
}
/**
 * 転送元と転送先のロケーションインターフェース
 * コイン口座あるいは、連携済の決済方法を指定可能
 */
export type ILocation<T extends LocationType> =
    T extends LocationType.Anonymous ? IAnonymousLocation :
    T extends LocationType.PaymentMethod ? IPaymentMethod<PaymentMethodType> :
    T extends LocationType.CoinAccount ? IAccount<AccountGoodType.CoinAccount> :
    never;
export type IObject = any;
export type IResult = any;
export type IPotentialActions = any;
/**
 * アクションの目的インターフェース
 * ここでは、取引が目的となる
 */
export interface IPurpose {
    /**
     * 取引タイプ
     */
    typeOf: TransactionType;
    /**
     * 取引ID
     */
    id: string;
}
export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.MoneyTransfer;
    /**
     * どんな取引によって発生した転送アクションか
     */
    purpose: IPurpose;
    /**
     * 転送量(金額)
     */
    amount: number;
    /**
     * 転送元
     */
    fromLocation: ILocation<LocationType>;
    /**
     * 転送先
     */
    toLocation: ILocation<LocationType>;
}
export type IAction = ActionFactory.IAction<IAttributes>;
