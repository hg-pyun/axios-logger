import { AxiosRequestConfig } from 'axios';
import { RequestLogConfig } from '../common/types';
import { mergeWithGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { printLog } from '../common/print';

function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const {url, data, method} = request;
    const buildConfig = config ? config : mergeWithGlobalConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makePrefix('Request')
        .makeDateFormat()
        .makeMethod(method)
        .makeUrl(url)
        .build();

    printLog(log);

    return request;
}

export default requestLogger;