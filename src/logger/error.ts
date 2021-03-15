import { AxiosError } from 'axios';
import { ErrorLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { requestMetaService } from '../common/request-meta-service';

function errorLoggerWithoutPromise(error: AxiosError, config: ErrorLogConfig = {}) {

    const {config: { method, url, params }, response} = error;

    let status, statusText, data, headers;
    if (response) {
        status = response.status;
        statusText = response.statusText;
        data = response.data;
        headers = response.headers;
    }

    const buildConfig = assembleBuildConfig(config);

    const meta = requestMetaService.delete(error.config);

    let time;
    if (meta) {
        time = Date.now() - meta.time;
    }

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Error')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeParams(params)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .makeTime(time)
        .build();

    buildConfig.logger(log);

    return error;
}

function errorLogger(error: AxiosError, config?: ErrorLogConfig) {
    return Promise.reject(errorLoggerWithoutPromise(error, config));
}

export { errorLogger, errorLoggerWithoutPromise };
