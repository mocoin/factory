import ErrorCode from '../errorCode';

/**
 * MocoinError
 * @extends {Error}
 */
export class MocoinError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        // tslint:disable-next-line:no-single-line-block-comment
        super(message)/* istanbul ignore next */;

        this.name = 'MocoinError';
        this.reason = code;
    }
}
