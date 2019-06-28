import { AxiosRequestConfig } from 'axios';
import { RequestLogConfig } from '../common/types';
import { mergeWithGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { printLog } from '../common/print';

function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const buildConfig = config ? config : mergeWithGlobalConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makePrefix()
        .makeDateFormat()
        .build();

    printLog(log);

    return request;
}

export default requestLogger;