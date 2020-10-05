import { getGlobalConfig } from './config';

function printLog (text: string) {
    getGlobalConfig().logger.log(text);
}

function printError (text: string) {
    getGlobalConfig().logger.error(text);
}

export {
    printLog,
    printError,
}
