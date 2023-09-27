"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() {
        this.logMessages = [];
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(messages) {
        const timestamp = new Date().toLocaleTimeString();
        const logMessages = `[${timestamp}] ${messages}`;
        this.logMessages.push(logMessages);
        console.log(logMessages);
    }
    getLogs() {
        return this.logMessages;
    }
}
exports.default = Logger;
