// tslint:disable:no-shadowed-variable
/**
 * index module
 */
import * as pecorinoFactory from '@pecorino/factory';

import AccountType from './factory/accountType';
import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as AuthorizeDepositCoinAccountActionFactory from './factory/action/authorize/deposit/account/coin';
import AuthorizeDepositActionObjectType from './factory/action/authorize/deposit/objectType';
import * as AuthorizeDepositBankAccountPaymentActionFactory from './factory/action/authorize/deposit/paymentMethod/bankAccount';
import * as AuthorizeTransferCoinAccountActionFactory from './factory/action/authorize/transfer/account/coin';
import AuthorizeTransferActionObjectType from './factory/action/authorize/transfer/objectType';
import * as AuthorizeWithdrawCoinAccountActionFactory from './factory/action/authorize/withdraw/account/coin';
import AuthorizeWithdrawActionObjectType from './factory/action/authorize/withdraw/objectType';
import * as AuthorizeWithdrawBankAccountPaymentActionFactory from './factory/action/authorize/withdraw/paymentMethod/bankAccount';
import * as PayActionFactory from './factory/action/trade/pay';
import * as GiveActionFactory from './factory/action/transfer/give';
import * as MoneyTransferActionFactory from './factory/action/transfer/moneyTransfer';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import CreativeWorkType from './factory/creativeWorkType';
import IMultilingualString from './factory/multilingualString';
import * as OfferFactory from './factory/offer';
import * as OrderFactory from './factory/order';
import OrderStatus from './factory/orderStatus';
import * as OrganizationFactory from './factory/organization';
import * as CorporationOrganizationFactory from './factory/organization/corporation';
import CorporationOrganizationIdentifier from './factory/organizationIdentifier/corporation';
import OrganizationType from './factory/organizationType';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import * as PersonFactory from './factory/person';
import PersonType from './factory/personType';
import PlaceType from './factory/placeType';
import PriceCurrency from './factory/priceCurrency';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import { UnitCode } from './factory/unitCode';

import * as CancelMoneyTransferTaskFactory from './factory/task/cancelMoneyTransfer';
import * as MoneyTransferTaskFactory from './factory/task/moneyTransfer';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';

import * as TaskFactory from './factory/task';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';
import * as TransactionFactory from './factory/transaction';
import * as BuyCoinTransactionFactory from './factory/transaction/buyCoin';
import * as DepositCoinTransactionFactory from './factory/transaction/depositCoin';
import * as ReturnCoinTransactionFactory from './factory/transaction/returnCoin';
import * as TransferCoinTransactionFactory from './factory/transaction/transferCoin';
import * as WithdrawCoinTransactionFactory from './factory/transaction/withdrawCoin';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';
import * as URLFactory from './factory/url';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';
export import pecorino = pecorinoFactory;
export import errors = errors;
export import errorCode = ErrorCode;

export import accountType = AccountType;
export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;
    export namespace authorize {
        export import IAction = AuthorizeActionFactory.IAction;
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export namespace deposit {
            export import ObjectType = AuthorizeDepositActionObjectType;
            export namespace account {
                export import coin = AuthorizeDepositCoinAccountActionFactory;
            }
            export namespace paymentMethod {
                export import bankAccount = AuthorizeDepositBankAccountPaymentActionFactory;
            }
        }
        export namespace transfer {
            export import ObjectType = AuthorizeTransferActionObjectType;
            export namespace account {
                export import coin = AuthorizeTransferCoinAccountActionFactory;
            }
        }
        export namespace withdraw {
            export import ObjectType = AuthorizeWithdrawActionObjectType;
            export namespace account {
                export import coin = AuthorizeWithdrawCoinAccountActionFactory;
            }
            export namespace paymentMethod {
                export import bankAccount = AuthorizeWithdrawBankAccountPaymentActionFactory;
            }
        }
    }
    export namespace interact {
    }
    export namespace trade {
        export import pay = PayActionFactory;
    }
    export namespace transfer {
        export import moneyTransfer = MoneyTransferActionFactory;
        export namespace give {
            export import IAction = GiveActionFactory.IAction;
            export import IAttributes = GiveActionFactory.IAttributes;
        }
        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
        }
        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
            export import order = SendOrderActionFactory;
        }
    }
    export namespace consume {
        export namespace use {
        }
    }
}
export namespace paymentMethod {
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
    }
}
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
}
export import creativeWorkType = CreativeWorkType;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import OfferType = OfferFactory.OfferType;
    export import IOffer = OfferFactory.IOffer;
}
export import order = OrderFactory;
export import orderStatus = OrderStatus;
export namespace organization {
    export import IOrganization = OrganizationFactory.IOrganization;
    export import IPaymentAccepted = OrganizationFactory.IPaymentAccepted;
    export import corporation = CorporationOrganizationFactory;
}
export namespace organizationIdentifier {
    export import corporation = CorporationOrganizationIdentifier;
}
export import organizationType = OrganizationType;
export import ownershipInfo = OwnershipInfoFactory;
export import priceCurrency = PriceCurrency;
export import paymentMethodType = PaymentMethodType;
export import person = PersonFactory;
export import personType = PersonType;
export import placeType = PlaceType;
export import programMembership = ProgramMembershipFactory;
export import quantitativeValue = QuantitativeValueFactory;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    export import moneyTransfer = MoneyTransferTaskFactory;
    export import sendEmailMessage = SendEmailMessageTaskFactory;
}
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export type IStartParams<T extends TransactionType> =
        T extends TransactionType.BuyCoin ? BuyCoinTransactionFactory.IStartParams :
        T extends TransactionType.DepositCoin ? DepositCoinTransactionFactory.IStartParams :
        T extends TransactionType.ReturnCoin ? ReturnCoinTransactionFactory.IStartParams :
        T extends TransactionType.WithdrawCoin ? WithdrawCoinTransactionFactory.IStartParams :
        T extends TransactionType.TransferCoin ? TransferCoinTransactionFactory.IStartParams :
        TransactionFactory.IStartParams<TransactionType, any, any, any>;
    export type IAttributes<T extends TransactionType> =
        T extends TransactionType.BuyCoin ? BuyCoinTransactionFactory.IAttributes :
        T extends TransactionType.DepositCoin ? DepositCoinTransactionFactory.IAttributes :
        T extends TransactionType.ReturnCoin ? ReturnCoinTransactionFactory.IAttributes :
        T extends TransactionType.WithdrawCoin ? WithdrawCoinTransactionFactory.IAttributes :
        T extends TransactionType.TransferCoin ? TransferCoinTransactionFactory.IAttributes :
        TransactionFactory.IAttributes<any, any, any, any>;
    export type ITransaction<T extends TransactionType> =
        T extends TransactionType.BuyCoin ? BuyCoinTransactionFactory.ITransaction :
        T extends TransactionType.DepositCoin ? DepositCoinTransactionFactory.ITransaction :
        T extends TransactionType.ReturnCoin ? ReturnCoinTransactionFactory.ITransaction :
        T extends TransactionType.WithdrawCoin ? WithdrawCoinTransactionFactory.ITransaction :
        T extends TransactionType.TransferCoin ? TransferCoinTransactionFactory.ITransaction :
        TransactionFactory.ITransaction<any, any, any, any>;
    export type IResult<T extends TransactionType> =
        T extends TransactionType.BuyCoin ? BuyCoinTransactionFactory.IResult :
        T extends TransactionType.DepositCoin ? DepositCoinTransactionFactory.IResult :
        T extends TransactionType.DepositCoin ? ReturnCoinTransactionFactory.IResult :
        T extends TransactionType.WithdrawCoin ? WithdrawCoinTransactionFactory.IResult :
        T extends TransactionType.TransferCoin ? TransferCoinTransactionFactory.IResult :
        any;
    export type IPotentialActions<T extends TransactionType> =
        T extends TransactionType.BuyCoin ? BuyCoinTransactionFactory.IPotentialActions :
        T extends TransactionType.DepositCoin ? DepositCoinTransactionFactory.IPotentialActions :
        T extends TransactionType.ReturnCoin ? ReturnCoinTransactionFactory.IPotentialActions :
        T extends TransactionType.WithdrawCoin ? WithdrawCoinTransactionFactory.IPotentialActions :
        T extends TransactionType.TransferCoin ? TransferCoinTransactionFactory.IPotentialActions :
        any;
    export type ITokenizedTransaction = TransactionFactory.ITokenizedTransaction;
    export import buyCoin = BuyCoinTransactionFactory;
    export import withdrawCoin = WithdrawCoinTransactionFactory;
    export import returnCoin = ReturnCoinTransactionFactory;
    export import depositCoin = DepositCoinTransactionFactory;
    export import transferCoin = TransferCoinTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import unitCode = UnitCode;
export import url = URLFactory;
