const chalk = require('chalk');
const Printer = require('../utility/Printer');

function responseLogger(response) {
    const {status, statusText, headers, data} = response;

    const printer = new Printer();

    printer.addLine(`${chalk.green(`[Response Helper] ${status}:${statusText}`)}`);
    printer.addLine(`- data: ${JSON.stringify(data)}`);

    printer.execute();

    return response;
}

module.exports = responseLogger;