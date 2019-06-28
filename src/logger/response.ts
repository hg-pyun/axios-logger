import { AxiosResponse } from 'axios';
import { ResponseLogConfig } from '../common/types';
import { mergeWithGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { printLog } from '../common/print';

function responseLogger(response: AxiosResponse, config?: ResponseLogConfig) {

    const buildConfig = config ? config : mergeWithGlobalConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makePrefix('Response')
        .makeDateFormat()
        .build();

    printLog(log);

    return response;
}

export default responseLogger;