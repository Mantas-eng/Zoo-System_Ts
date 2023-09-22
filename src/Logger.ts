class Logger {
    private static instance: Logger;
    private logMessages: string[] = [];


    private constructor() { }
    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(messages: string) {
        const timestamp = new Date().toLocaleTimeString();
        const logMessages = `[${timestamp}] ${messages}`;
        this.logMessages.push(logMessages);
        console.log(logMessages);
    }

    getLogs(): string[] {
        return this.logMessages;
    }
}

export default Logger;