import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';

let globalConfig: GlobalLogConfig;

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config: GlobalLogConfig) {
    globalConfig = config;
}

function mergeWithGlobalConfig(config?: RequestLogConfig | ResponseLogConfig | ErrorLogConfig) {
    return {
        ...globalConfig,
        ...config,
    };
}

export {
    getGlobalConfig,
    setGlobalConfig,
    mergeWithGlobalConfig,
};