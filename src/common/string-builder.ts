import dateformat from 'dateformat';
import { GlobalLogConfig } from './types';

class StringBuilder {
    private config: GlobalLogConfig;
    private printQueue: Array<string>;

    constructor(config: GlobalLogConfig) {
        this.config = config;
        this.printQueue = [];
    }

    makePrefix() {
        const prefix = this.config.prefixText ? this.config.prefixText : '[Axios Logger]';
        this.printQueue.push(prefix);
        return this;
    }

    makeDateFormat() {
        const dateFormat = dateformat(new Date(), this.config.dateFormat || 'isoDateTime');
        this.printQueue.push(dateFormat);
        return this;
    }

    build() {
        return this.printQueue.join(' ');
    }
}

export default StringBuilder;