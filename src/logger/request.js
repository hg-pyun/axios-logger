const chalk = require('chalk');
const Printer = require('../utility/Printer');

function requestLogger(config) {
    const {url, method, data, contentType, responseType} = config;

    const printer = new Printer();

    printer.addLine(`${chalk.green(`[Request Helper] ${url}`)}`);
    printer.addLine(`- method: ${method}`);
    printer.addLine(`- contentType: ${contentType}`);
    printer.addLine(`- responseType: ${responseType}`);
    printer.addLine(`- data: ${JSON.stringify(data)}`);

    printer.execute();

    return config;
}


module.exports = requestLogger;