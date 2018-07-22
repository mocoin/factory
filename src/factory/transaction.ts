import { IExtendId } from './autoGenerated';
import TransactionStatusType from './transactionStatusType';
import TransactionTasksExportationStatus from './transactionTasksExportationStatus';
import TransactionType from './transactionType';

/**
 * 取引開始パラメーターインターフェース
 */
export interface IStartParams<T extends TransactionType, TAgent, TRecipient, TObject> {
    /**
     * 取引タイプ
     */
    typeOf: T;
    /**
     * 取引主体
     */
    agent: TAgent;
    /**
     * 取引物受取者
     */
    recipient: TRecipient;
    /**
     * 取引対象
     */
    object: TObject;
    /**
     * 取引進行期限
     */
    expires: Date;
}

/**
 * 取引インターフェース
 */
export type ITransaction<TStartParams, TResult, TError, TPotentialActions> =
    IExtendId<IAttributes<TStartParams, TResult, TError, TPotentialActions>>;

/**
 * 取引属性インターフェース
 */
export type IAttributes<TStartParams, TResult, TError, TPotentialActions> = TStartParams & {
    /**
     * 取引状態
     */
    status: TransactionStatusType;
    /**
     * 取引結果
     */
    result?: TResult;
    /**
     * 取引エラー
     */
    error?: TError;
    /**
     * 取引開始日時
     */
    startDate?: Date;
    /**
     * 取引終了日時
     */
    endDate?: Date;
    /**
     * タスクエクスポート日時
     */
    tasksExportedAt?: Date;
    /**
     * タスクエクスポート状態
     */
    tasksExportationStatus: TransactionTasksExportationStatus;
    /**
     * 事後に発生するアクション
     */
    potentialActions?: TPotentialActions;
};
