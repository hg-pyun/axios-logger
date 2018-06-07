const chalk = require('chalk');

function requestLogger(config) {
    const {url, method, data, contentType, responseType} = config;

    const printer = [];

    printer.push(`${chalk.green(`[Request Helper] ${url}`)}`);
    printer.push(`- method: ${method}`);
    printer.push(`- contentType: ${contentType}`);
    printer.push(`- responseType: ${responseType}`);
    printer.push(`- data: ${JSON.stringify(data)}`);

    const message = printer.join('\n');
    console.log(message);

    return config;
}

function responseLogger(response) {
    const {status, statusText, headers, data} = response;

    const printer = [];

    printer.push(`${chalk.green(`[Response Helper] ${status}:${statusText}`)}`);
    printer.push(`- data: ${JSON.stringify(data)}`);

    const message = printer.join('\n');
    console.log(message);

    return response;
}

function errorLogger(err) {
    console.log(error);
    return Promise.reject(error);
}

module.exports.requestLogger = requestLogger;
module.exports.responseLogger = responseLogger;
module.exports.errorLogger = errorLogger;
