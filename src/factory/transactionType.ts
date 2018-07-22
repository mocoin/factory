/**
 * 取引タイプ
 */
enum TransactionType {
    /**
     * コイン出金取引
     */
    WithdrawCoin = 'WithdrawCoin',
    /**
     * コイン入金取引
     */
    DepositCoin = 'DepositCoin',
    /**
     * コイン転送取引
     */
    TransferCoin = 'TransferCoin'
}

export default TransactionType;
