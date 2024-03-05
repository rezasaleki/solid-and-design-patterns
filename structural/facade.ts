/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */

class Facade {
    protected subsystem1: SubSystem1;
    protected subsystem2: SubSystem2;

    /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     */

    constructor(subsystem1?: SubSystem1, subsystem2?: SubSystem2) {
        this.subsystem1 = subsystem1 || new SubSystem1();
        this.subsystem2 = subsystem2 || new SubSystem2();
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */

    public operations(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.operationA();
        result += this.subsystem2.operationC();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.operationB();
        result += this.subsystem2.operationZ();

        return result;
    }
}

/**
 * The Subsystem can accept requests either from the facade or client directly.
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 */

class SubSystem1 {
    public operationA(): string {
        return 'Subsystem1: Ready!\n';
    }

    public operationB(): string {
        return 'Subsystem1: Go!\n';
    }
}

/**
 * Some facades can work with multiple subsystems at the same time.
 */
class SubSystem2 {
    public operationC(): string {
        return 'Subsystem2: Get ready!\n';
    }

    // ...

    public operationZ(): string {
        return 'Subsystem2: Fire!';
    }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */

function clientCode(facade: Facade) {
    console.log(facade.operations());
}


/**
 * The client code may have some of the subsystem's objects already created. In
 * this case, it might be worthwhile to initialize the Facade with these objects
 * instead of letting the Facade create new instances.
 */

const subsystem1 = new SubSystem1();
const subsystem2 = new SubSystem2();

const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);