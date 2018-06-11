const chalk = require('chalk');
const config = require('../config');
const Printer = require('../utility/Printer');

function requestLogger(axiosConfig) {
    const {url, method, data, headers, responseType} = axiosConfig;

    // logging objects.
    const globalConfig = config.get();
    const printer = new Printer();

    // print informations.
    const dateObj = new Date().toISOString();
    const time = `[${dateObj.slice(0,10)} ${dateObj.slice(11, 19)}]`;
    const methodMessage = `${chalk.yellow(`${method.toUpperCase()}`)}`;
    const contentTypeMessage = `${headers['Content-Type']}`;

    if (globalConfig.mode === 0) {
        printer.addText(`${chalk.green('[Axios Request]')}`);
        printer.addText(time);
        printer.addText(methodMessage);
        printer.addText(`${url}`);
        printer.addText(contentTypeMessage);

        Printer.execute(printer.getFullTextWithSpace());
    }
    else {
        printer.addText(`${chalk.green(`[Axios Request] ${time}$ {url}`)}`);
        printer.addText(`- method: ${methodMessage}`);
        printer.addText(`- contentType: ${contentTypeMessage}`);
        printer.addText(`- responseType: ${responseType}`);
        printer.addText(`- data: ${JSON.stringify(data)}`);

        Printer.execute(printer.getFullTextWithLine());
    }

    return axiosConfig;
}


module.exports = requestLogger;