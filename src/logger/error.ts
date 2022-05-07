import { AxiosError } from 'axios';
import { ErrorLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';

function errorLoggerWithoutPromise(error: AxiosError, config: ErrorLogConfig = {}) {
    if (!error.config) {
        return error
    }

    const {config: { method, baseURL, params, url }, response} = error;

    let status, statusText, data, headers;
    if (response) {
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
        .makeMethod(method)
        .makeUrl(url, baseURL)
        .makeParams(params)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();

    buildConfig.logger(log);

    return error;
}

function errorLogger(error: AxiosError, config?: ErrorLogConfig) {
    return Promise.reject<AxiosError>(errorLoggerWithoutPromise(error, config));
}

export { errorLogger, errorLoggerWithoutPromise };
