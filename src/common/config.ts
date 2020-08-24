import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';

let globalConfig: GlobalLogConfig = {
    method: true,
    url: true,
    data: true,
    status: true,
    logger: console.log,
    prefixText: 'Axios',
    dateFormat: false,
    headers: false,
};

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config: GlobalLogConfig) {
    globalConfig = {
        ...globalConfig,
        ...config,
    };
}

function assembleBuildConfig(config?: RequestLogConfig | ResponseLogConfig | ErrorLogConfig) {
    return {
        ...globalConfig,
        ...config,
    };
}

export {
    getGlobalConfig,
    setGlobalConfig,
    assembleBuildConfig,
};
