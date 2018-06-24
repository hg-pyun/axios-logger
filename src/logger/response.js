const chalk = require('chalk');
const Printer = require('../utility/Printer');
const time = require('../utility/time');

function responseLogger(response) {
    const {config, status, statusText, data} = response;

    const printer = new Printer();

    printer.addText(chalk.green('[Axios Response]'));
    printer.addText(`[${time.getCurrentWithFormat()}]`);
    printer.addText(`${chalk.yellow(`${config.method.toUpperCase()}`)}`);
    printer.addText(`${status}:${statusText}`);
    printer.addText(config.url);
    printer.addText(`${JSON.stringify(data)}`);

    Printer.execute(printer.getFullTextWithSpace());

    return response;
}

module.exports = responseLogger;