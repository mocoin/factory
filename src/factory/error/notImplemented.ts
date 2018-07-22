// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { MocoinError } from './mocoin';

/**
 * NotImplementedError
 * @extends {MocoinError}
 */
export default class NotImplementedError extends MocoinError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.NotImplemented, actualMessage)/* istanbul ignore next */;

        setPrototypeOf(this, NotImplementedError.prototype);
    }
}
