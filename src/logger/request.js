const chalk = require('chalk');
const Printer = require('../utility/Printer');
const time = require('../utility/time');

function requestLogger(axiosConfig) {
    const {url, method, data, headers, responseType} = axiosConfig;
    const printer = new Printer();

    printer.addText(chalk.green('[Axios Request]'));
    printer.addText(`[${time.getCurrentWithFormat()}]`);
    printer.addText(`${chalk.yellow(`${method.toUpperCase()}`)}`);
    printer.addText(`${url}`);
    printer.addText(`${headers['Content-Type']}`);

    Printer.execute(printer.getFullTextWithSpace());

    return axiosConfig;
}


module.exports = requestLogger;