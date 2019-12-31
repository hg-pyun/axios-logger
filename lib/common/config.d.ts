import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';
declare function getGlobalConfig(): GlobalLogConfig;
declare function setGlobalConfig(config: GlobalLogConfig): void;
declare function assembleBuildConfig(config?: RequestLogConfig | ResponseLogConfig | ErrorLogConfig): {
    data?: boolean | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
    code?: boolean | undefined;
    prefixText?: string | boolean | undefined;
    dateFormat?: string | boolean | undefined;
    headers?: boolean | undefined;
} | {
    data?: boolean | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    prefixText?: string | boolean | undefined;
    dateFormat?: string | boolean | undefined;
    headers?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
    code?: boolean | undefined;
} | {
    data?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
    prefixText?: string | boolean | undefined;
    dateFormat?: string | boolean | undefined;
    headers?: boolean | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    code?: boolean | undefined;
} | {
    data?: boolean | undefined;
    code?: boolean | undefined;
    prefixText?: string | boolean | undefined;
    dateFormat?: string | boolean | undefined;
    headers?: boolean | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
};
export { getGlobalConfig, setGlobalConfig, assembleBuildConfig, };
