import { AxiosResponse } from 'axios';
import { ResponseLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import { requestMetaService } from '../common/request-meta-service';

function responseLogger(response: AxiosResponse, config: ResponseLogConfig = {}) {
    const {
        config: { url, method, params },
        status,
        statusText,
        data,
        headers,
    } = response;
    const buildConfig = assembleBuildConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const meta = requestMetaService.delete(response.config);

    let time;
    if (meta) {
        time = Date.now() - meta.time;
    }

    const log = stringBuilder
        .makeLogTypeWithPrefix('Response')
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

    return response;
}

export default responseLogger;
