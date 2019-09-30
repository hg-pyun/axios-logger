export interface CommonConfig {
    prefixText?: string | boolean,
    dateFormat?: string | boolean,
    headers?: boolean,
}

export interface GlobalLogConfig extends CommonConfig {
    data?: boolean,
    url?: boolean,
    method?: boolean,
    status?: boolean,
    statusText?: boolean,
    code?: boolean,
}

export interface RequestLogConfig extends CommonConfig {
    data?: boolean,
    url?: boolean,
    method?: boolean,
}

export interface ResponseLogConfig extends CommonConfig {
    data?: boolean,
    status?: boolean,
    statusText?: boolean,
}

export interface ErrorLogConfig extends CommonConfig {
    data?: boolean,
    code?: boolean,
}