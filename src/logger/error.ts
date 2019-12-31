import { AxiosError } from 'axios';
import { ErrorLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { printLog } from '../common/print';

function errorLoggerWithoutPromise(error: AxiosError, config?: ErrorLogConfig) {

    const {config: {url, method}, response} = error;

    let status, statusText, data, headers;
    if(response){
        status = response.status;
        statusText = response.statusText;
        data = response.data;
        headers = response.headers;
    }

    const buildConfig = assembleBuildConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Error')
        .makeDateFormat(new Date())
        .makeUrl(url)
        .makeMethod(method)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();

    printLog(log);

    return error;
}

function errorLogger(error: AxiosError) {
    return Promise.reject(errorLoggerWithoutPromise(error));
}

export { errorLogger, errorLoggerWithoutPromise };