interface Formatter {
    format(message: string): string;
}

class PlainFormatter implements Formatter {
    format(message: string): string {
        return message;
    }
}

class JsonFormatter implements Formatter {
    format(message: string): string {
        const jsonFormat = `{"log": "${message}"}`;
        return jsonFormat;
    }
}

class Logger{
    private formatter: Formatter;

    constructor (formatter: Formatter){
        this.formatter = formatter;
    }

    log(message: string): void{
        const formattedMessage = this.formatter.format(message);
        console.log(formattedMessage);
    }

}

const plainLogger = new Logger(new PlainFormatter());
plainLogger.log("Server started on port 8080");

const jsonLogger = new Logger(new JsonFormatter());
jsonLogger.log("Server started on port 8080");