import { getGlobalConfig } from './config';

function printLog (text: string) {
    getGlobalConfig().logger.info(text);
}

export {
    printLog,
}
