// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { MocoinError } from './mocoin';

/**
 * ArgumentNullError
 * @extends {MocoinError}
 */
export default class ArgumentNullError extends MocoinError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Missing argument: ${argumentName}.`;
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.ArgumentNull, actualMessage)/* istanbul ignore next */;

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentNullError.prototype);
    }
}
