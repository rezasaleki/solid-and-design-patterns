/**
 * The Command interface declares a method for executing a command.
 */
interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private readonly _payload: string;

    constructor(payload: string) {
        this._payload = payload;
    }

    execute() {
        console.log(`SimpleCommand: See, I can do simple things like printing (${this._payload})`);
    }
}

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receivers."
 */
class ComplexCommand implements Command {
    private _receiver: Receiver;

    /**
     * Context data, required for launching the receiver's methods.
     */
    private readonly _a: string;

    private readonly _b: string;

    /**
     * Complex commands can accept one or several receiver objects along with
     * any context data via the constructor.
     */
    constructor(receiver: Receiver, a: string, b: string) {
        this._receiver = receiver;
        this._a = a;
        this._b = b;
    }

    /**
     * Commands can delegate to any methods of a receiver.
     */
    execute() {
        console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
        this._receiver.doSomething(this._a);
        this._receiver.doSomethingElse(this._b);
    }
}

/**
 * The Receiver classes contain some important business logic. They know how to
 * perform all kinds of operations, associated with carrying out a request. In
 * fact, any class may serve as a Receiver.
 */
class Receiver {
    public doSomething(a: string): void {
        console.log(`Receiver: Working on (${a}.)`);
    }

    public doSomethingElse(b: string): void {
        console.log(`Receiver: Also working on (${b}.)`);
    }
}

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */

class Invoker {
    private onStart: Command;
    private onFinish: Command;

    /**
     * Initialize commands.
     */
    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    /**
     * The Invoker does not depend on concrete command or receiver classes. The
     * Invoker passes a request to a receiver indirectly, by executing a
     * command.
     */

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        console.log('Invoker: ...doing something really important...');

        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
}

/**
 * The client code can parameterize an invoker with any commands.
 */
const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi'));

const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'send Email', 'save report'));

invoker.doSomethingImportant();

// Invoker: Does anybody want something done before I begin?
// SimpleCommand: See, I can do simple things like printing (Say Hi!)
// Invoker: ...doing something really important...
// Invoker: Does anybody want something done after I finish?
// ComplexCommand: Complex stuff should be done by a receiver object.
// Receiver: Working on (Send email.)
// Receiver: Also working on (Save report.)
