class Printer {
    constructor() {
        this.textArray = [];
    }

    addLine(string) {
        this.textArray.push(string);
    }

    getFullText() {
        return this.textArray.join('\n');
    }

    execute() {
        console.log(this.getFullText());
    }

    toString() {
        return this.getFullText();
    }
}

module.exports = Printer;