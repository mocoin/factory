import { IOrganization } from './organization';
import PaymentMethodType from './paymentMethodType';
import { IPerson } from './person';
import { IProgramMembership, ProgramMembershipType } from './programMembership';

/**
 * 口座タイプ
 */
export enum AccountGoodType {
    /**
     * コイン口座
     */
    CoinAccount = 'CoinAccount',
    /**
     * ポイント口座
     */
    PointAccount = 'PointAccount'
}
/**
 * 口座インターフェース
 */
export interface IAccount<T extends AccountGoodType> {
    /**
     * 口座タイプ
     */
    typeOf: T;
    /**
     * 口座番号
     */
    accountNumber: string;
}
export type PaymentMethodGoodType = 'PaymentMethod';
/**
 * 銀行口座決済方法インターフェース
 */
export interface IBankAccountPaymentMethod {
    typeOf: PaymentMethodGoodType;
    /**
     * 決済方法タイプ
     */
    paymentMethodType: PaymentMethodType.BankAccount;
    /**
     * 口座番号
     */
    accountNumber: string;
}
/**
 * 決済方法インターフェース
 */
export type IPaymentMethod<T extends PaymentMethodType> =
    /**
     * 銀行口座決済方法
     */
    T extends PaymentMethodType.BankAccount ? IBankAccountPaymentMethod :
    never;
/**
 * 所有対象物のタイプ
 */
export type IGoodType = ProgramMembershipType | PaymentMethodGoodType | AccountGoodType;
/**
 * 所有物インタエーフェース (Product or Service)
 */
export type IGood<T extends IGoodType> =
    /**
     * 会員プログラムタイプの場合
     */
    T extends ProgramMembershipType ? IProgramMembership :
    /**
     * 決済方法タイプの場合
     */
    T extends PaymentMethodGoodType ? IPaymentMethod<PaymentMethodType> :
    /**
     * 口座タイプの場合
     */
    T extends AccountGoodType ? IAccount<T> :
    never;
/**
 * 所有者インターフェース
 */
export type IOwner = IOrganization | IPerson;
export type OwnershipInfoType = 'OwnershipInfo';
/**
 * 所有権インターフェース
 */
export interface IOwnershipInfo<T extends IGoodType> {
    /**
     * 所有権タイプ
     */
    typeOf: OwnershipInfoType;
    /**
     * 所有権識別子
     */
    identifier: string;
    /**
     * 所有者
     */
    ownedBy: IOwner;
    /**
     * 誰から所有権を獲得したか
     */
    acquiredFrom?: IOwner;
    /**
     * いつから所有か
     */
    ownedFrom: Date;
    /**
     * いつまで所有か
     */
    ownedThrough?: Date;
    /**
     * 所有物
     */
    typeOfGood: IGood<T>;
}
/**
 * 所有権検索条件インターフェース
 */
export interface ISearchConditions<T extends IGoodType> {
    /**
     * 所有権識別子
     */
    identifier?: string;
    /**
     * 所有対象物のタイプ
     */
    goodType: T;
    /**
     * 所有対象物
     */
    // typeOfGood?: {
    //     /**
    //      * どのイベント予約か
    //      */
    //     eventReservationFor?: {
    //         /**
    //          * イベントタイプ
    //          */
    //         typeOf: EventType;
    //         identifier: string;
    //     };
    // };
    /**
     * 所有者ID
     */
    ownedBy?: string;
    /**
     * いつの時点での所有か
     */
    ownedAt?: Date;
}
