class Printer {
    constructor() {
        this.textArray = [];
    }

    addText(string) {
        if (string !== 'undefined')
            this.textArray.push(string);
    }

    getFullTextWithSpace() {
        return this.textArray.join(' ');
    }

    getFullTextWithLine() {
        return this.textArray.join('\n');
    }

    static execute(text) {
        console.log(text);
    }
}

module.exports = Printer;