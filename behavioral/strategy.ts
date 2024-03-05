
interface StrategyInterface {
    doAlgorithm(data: string[]): string[];
}

class Context {
    private _strategy: StrategyInterface;

    constructor(strategy: StrategyInterface) {
        this._strategy = strategy;
    }

    setStrategy(strategy: StrategyInterface): void {
        this._strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this._strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

class ConcreteStrategyA implements StrategyInterface {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements StrategyInterface {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('**********************************');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();