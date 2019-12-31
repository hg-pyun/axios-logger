import { AxiosRequestConfig } from 'axios';
import { RequestLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { printLog } from '../common/print';

function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const {url, method, data, headers} = request;
    const buildConfig = assembleBuildConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makePrefix('Request')
        .makeDateFormat()
        .makeUrl(url)
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();

    printLog(log);

    return request;
}

export default requestLogger;