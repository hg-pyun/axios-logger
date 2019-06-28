import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';

let globalConfig = {};

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config: GlobalLogConfig) {
    globalConfig = config;
}

function getGlobalConfigWithMerge(config: RequestLogConfig | ResponseLogConfig | ErrorLogConfig) {
    return {
        ...globalConfig,
        ...config,
    };
}


export {
    getGlobalConfig,
    setGlobalConfig,
    getGlobalConfigWithMerge,
};