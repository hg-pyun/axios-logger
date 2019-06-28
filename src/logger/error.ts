import { AxiosError } from 'axios';
import { ErrorLogConfig } from '../common/types';
import { mergeWithGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { printLog } from '../common/print';

function errorLoggerWithoutPromise(error: AxiosError, config?: ErrorLogConfig) {

    const buildConfig = config ? config : mergeWithGlobalConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makePrefix()
        .makeDateFormat()
        .build();

    printLog(log);

    return error;
}

function errorLogger(error: AxiosError) {
    return Promise.reject(errorLoggerWithoutPromise(error));
}

export { errorLogger, errorLoggerWithoutPromise };