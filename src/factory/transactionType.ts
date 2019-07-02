/**
 * 取引タイプ
 */
enum TransactionType {
    /**
     * コイン購入取引
     */
    BuyCoin = 'BuyCoin',
    /**
     * コイン返金取引
     */
    ReturnCoin = 'ReturnCoin',
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
