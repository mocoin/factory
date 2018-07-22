/**
 * task name
 * タスク名
 */

enum TaskName {
    /**
     * 現金転送取消
     */
    CancelMoneyTransfer = 'cancelMoneyTransfer',
    /**
     * 現金転送
     */
    MoneyTransfer = 'moneyTransfer',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage'
}

export default TaskName;
