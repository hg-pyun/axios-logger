function requestLogger(axiosConfig) {
    const {url, method, data} = axiosConfig;
    // const printer = new Printer();
    //
    // printer.addText(chalk.green('[Axios Request]'));
    // printer.addText(`[${time.getCurrentWithFormat()}]`);
    // printer.addText(`${chalk.yellow(`${method.toUpperCase()}`)}`);
    // printer.addText(`${url}`);
    // printer.addText(`${JSON.stringify(data)}`);
    //
    // Printer.execute(printer.getFullTextWithSpace());

    return axiosConfig;
}


export default requestLogger;