import dateformat from 'dateformat';
import { GlobalLogConfig } from './types';
import chalk from 'chalk';

class StringBuilder {
    private config: GlobalLogConfig;
    private printQueue: Array<string>;
    private filteredHeaderList: Array<String>;

    constructor(config: GlobalLogConfig) {
        this.config = config;
        this.printQueue = [];
        this.filteredHeaderList = ['common', 'delete', 'get', 'head', 'post', 'put', 'patch', 'content-type', 'content-length', 'vary', 'date', 'connection', 'content-security-policy'];
    }

    makeLogTypeWithPrefix(logType: string) {
        const prefix = this.config.prefixText === false ? `[${logType}]` : `[${this.config.prefixText || 'Axios'}][${logType}]`;
        this.printQueue.push(chalk.green(prefix));
        return this;
    }

    makeDateFormat(date: Date) {
        // allow for opting-out of adding the timestamp (as most loggers already add this)
        if (this.config.dateFormat !== false) {
            // @ts-ignore
            const dateFormat = dateformat(date, this.config.dateFormat || 'isoDateTime');
            this.printQueue.push(dateFormat);
        }
        return this;
    }

    makeHeader(headers?: { [key:string] : {value:string}}) {
        if(this.config.headers && headers) {
            const headerMap:{ [key:string] : {value:string}} = {};
            for(let key in headers) {
                if(!this.filteredHeaderList.includes(key)) {
                    headerMap[key] = headers[key];
                }
            }

            this.printQueue.push(JSON.stringify(headerMap));
        }
        return this;
    }

    makeUrl(url?: string, baseUrl?: string) {
        if(this.config.url && url) {
            if(baseUrl) url = this.combineURLs(baseUrl, url);
            this.printQueue.push(url);
        }
        return this;
    }

    makeParams(params?: object) {
        if(this.config.params && params) this.printQueue.push(JSON.stringify(params));
        return this;
    }

    makeMethod(method?: string) {
        if(this.config.method && method) this.printQueue.push(chalk.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data: object) {
        const str = typeof data === `string` ? data : JSON.stringify(data);
        if(this.config.data && data) this.printQueue.push(str);
        return this;
    }

    makeStatus(status?: number, statusText?: string) {
        if(this.config.status && this.config.statusText && status && statusText) this.printQueue.push(`${status}:${statusText}`);
        else if(this.config.status && status) this.printQueue.push(`${status}`);
        else if(this.config.statusText && statusText) this.printQueue.push(statusText);
        return this;
    }

    build() {
        return this.printQueue.join(' ');
    }

    /**
     * Helper imported from Axios library
     * @see https://github.com/axios/axios/blob/d99d5faac29899eba68ce671e6b3cbc9832e9ad8/lib/helpers/combineURLs.js
     * */
    combineURLs(baseURL: string, relativeURL?: string): string {
        return relativeURL
            ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
            : baseURL;
    };
}

export default StringBuilder;
