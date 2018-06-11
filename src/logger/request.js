const chalk = require('chalk');
const globalConfig = require('../config');
const Printer = require('../utility/Printer');

function requestLogger(axiosConfig) {
    const {url, method, data, contentType, responseType} = axiosConfig;

    console.log('config', globalConfig.getConfig());

    const printer = new Printer();

    printer.addLine(`${chalk.green(`[Request Helper] ${url}`)}`);
    printer.addLine(`- method: ${method}`);
    printer.addLine(`- contentType: ${contentType}`);
    printer.addLine(`- responseType: ${responseType}`);
    printer.addLine(`- data: ${JSON.stringify(data)}`);

    printer.execute();

    return axiosConfig;
}


module.exports = requestLogger;