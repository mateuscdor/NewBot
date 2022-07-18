
import IWebMessageInfo from "@adiwajshing/baileys"

export interface Command {
    onCommand(api: any, message: typeof IWebMessageInfo): void;
    command(): String;
    alias(): Set<string>;
}