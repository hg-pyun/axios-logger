export interface CommonConfig {
    prefixText?: string | boolean,
    dateFormat?: string | boolean,
    headers?: boolean,
    logger: {
        log: (message?: any) => any,
        debug: (message?: any) => any,
        error: (message?: any) => any,
        assert: (message?: any) => any,
        trace: (message?: any) => any,
        warn: (message?: any) => any,
    },
}

export interface GlobalLogConfig extends CommonConfig {
    data?: boolean,
    method?: boolean,
    url?: boolean,
    status?: boolean,
    statusText?: boolean,
    code?: boolean,
}

export interface RequestLogConfig extends CommonConfig {
    data?: boolean,
    method?: boolean,
    url?: boolean,
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
