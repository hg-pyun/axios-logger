import { getGlobalConfig } from './config';

function printLog (text: string) {
    getGlobalConfig().logger(text);
}

export {
    printLog,
}
