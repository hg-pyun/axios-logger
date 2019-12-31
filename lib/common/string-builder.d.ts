import { GlobalLogConfig } from './types';
declare class StringBuilder {
    private config;
    private printQueue;
    private filteredHeaderList;
    constructor(config: GlobalLogConfig);
    makeLogTypeWithPrefix(logType: string): this;
    makeDateFormat(date: Date): this;
    makeHeader(headers?: {
        [key: string]: {
            value: string;
        };
    }): this;
    makeUrl(url?: string): this;
    makeMethod(method?: string): this;
    makeData(data: object): this;
    makeStatus(status?: number, statusText?: string): this;
    build(): string;
}
export default StringBuilder;
