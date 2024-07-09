import dateformat from 'dateformat';
import { GlobalLogConfig } from './types';
import chalk from 'chalk';
import { AxiosResponse } from "axios/index";
import { join, isURLSearchParams, convertURLSearchParamsToObject } from "./utils";

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

    makeHeader(headers?: AxiosResponse['headers']) {
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
        if(this.config.params && params) {
            let str = '';
            if (isURLSearchParams(params)) {
                const obj = convertURLSearchParamsToObject(params as URLSearchParams);
                str = JSON.stringify(obj);
            } else {
                str = typeof params === `string` ? params : JSON.stringify(params);
            }
            this.printQueue.push(str);
        }
        return this;
    }

    makeMethod(method?: string) {
        if(this.config.method && method) this.printQueue.push(chalk.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data: object) {
        if(this.config.data && data) {
            let str: string = '';
            if (isURLSearchParams(data)) {
                const obj = convertURLSearchParamsToObject(data as URLSearchParams);
                str = JSON.stringify(obj);
            } else {
                str = typeof data === `string` ? data : JSON.stringify(data);
            }
            this.printQueue.push(str);
        }
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

    combineURLs(baseURL: string, relativeURL?: string): string {
        const checkURLContainHost = (url: string) => {
            try {
                return new URL(url) // throw error if url without host
            } catch (e) {
                return null
            }
        }

        const isRelativeUrl = relativeURL && relativeURL !== '';

        if (!isRelativeUrl) {
            return baseURL;
        }        

        const isRelativeUrlHaveHost = relativeURL && checkURLContainHost(relativeURL) ? true : false;

        if (isRelativeUrlHaveHost) {
            return relativeURL as string;
        } 
            
        const firstURL = (baseURL !== '') ? new URL(baseURL) : null;
        const isBaseUrlHaveSubpath = firstURL && firstURL.pathname !== '' ? true : false;

        if (isBaseUrlHaveSubpath && firstURL) {
            return (new URL(join(firstURL.pathname, relativeURL as string), baseURL)).toString();
        } else {
            return (new URL(relativeURL as string, baseURL)).toString();
        }
    }
}

export default StringBuilder;
