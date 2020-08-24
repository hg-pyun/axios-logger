export interface CommonConfig {
    prefixText?: string | boolean;
    dateFormat?: string | boolean;
    headers?: boolean;
    logger: (text: string) => any;
}
export interface GlobalLogConfig extends CommonConfig {
    data?: boolean;
    method?: boolean;
    url?: boolean;
    status?: boolean;
    statusText?: boolean;
    code?: boolean;
}
export interface RequestLogConfig extends CommonConfig {
    data?: boolean;
    method?: boolean;
    url?: boolean;
}
export interface ResponseLogConfig extends CommonConfig {
    data?: boolean;
    status?: boolean;
    statusText?: boolean;
}
export interface ErrorLogConfig extends CommonConfig {
    data?: boolean;
    code?: boolean;
}
