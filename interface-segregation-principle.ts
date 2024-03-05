// Interface Segregation Principle

interface Animal {
    run(): void;
    eat(): void;
}

interface FlyableAnimal {
    fly(): void;
}

class Bird implements Animal, FlyableAnimal {
    public run() { /* ... */ }
    public eat() { /* ... */ }
    public fly() { /* ... */ }
}
