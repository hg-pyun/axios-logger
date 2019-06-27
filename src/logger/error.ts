function errorLogger(err) {

    // logging objects.
    // const printer = new Printer();
    // const {config, status, statusText} = err.response;
    //
    // printer.addText(chalk.red('[Axios Error]'));
    // printer.addText(`[${time.getCurrentWithFormat()}]`);
    // printer.addText(`${chalk.yellow(`${config.method.toUpperCase()}`)}`);
    // printer.addText(config.url);
    // printer.addText(`${status}:${statusText}`);
    //
    // Printer.execute(printer.getFullTextWithSpace());

    return Promise.reject(err);
}

export default errorLogger;