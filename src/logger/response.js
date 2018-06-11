const chalk = require('chalk');
const Printer = require('../utility/Printer');

function responseLogger(response) {
    const {status, statusText, headers, data} = response;

    const printer = new Printer();

    printer.addText(`${chalk.green(`[Response Helper] ${status}:${statusText}`)}`);
    printer.addText(`- data: ${JSON.stringify(data)}`);

    console.log(printer.getFullTextWithLine());

    return response;
}

module.exports = responseLogger;