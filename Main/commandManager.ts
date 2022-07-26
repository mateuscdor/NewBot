import Command from "../commands/Command";

export class CommandManager {

    commands: Set<Command>;
    instance: CommandManager;

    constructor() {
        if (!this.commands) this.commands = new Set<Command>();
        if (!this.instance) this.instance = this;
    };
    public addCommand(command: Command) : void {
        this.commands.add(command);
    };
    public findCommand(name: String) : Command | undefined | null {
        for (let command of this.commands.values()){
            if (command.command() == name.toLowerCase() || command.alias().has(name.toLowerCase())) {
                return command;
            }
        }
        return null;
    };
    public getCommands(): Set<String> {
        let commands2: Set<String> = new Set<String>();
        this.commands.forEach(command => {
            commands2.add(command.command());
        });
        return commands2;
    }
    public getInstance(): CommandManager {
        return this.instance;
    }
}