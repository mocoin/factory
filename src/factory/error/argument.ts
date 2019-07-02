// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { MocoinError } from './mocoin';

/**
 * ArgumentError
 * @extends {MocoinError}
 */
export default class ArgumentError extends MocoinError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Invalid or missing argument supplied: ${argumentName}.`;
        }

        // tslint:disable-next-line:no-single-line-block-comment
        super(ErrorCode.Argument, actualMessage)/* istanbul ignore next */;

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentError.prototype);
    }
}
