// Open/Close Principle

interface LanguageInterface {
    sayHello(): string;
}

class Persian implements LanguageInterface {
    sayHello(): string {
        return 'سلام';
    }
}

class English implements LanguageInterface {
    sayHello(): string {
        return 'hi';
    }
}

class Hello {
    public say(language: LanguageInterface): string {
        return language.sayHello();
    }
}

const hello = new Hello();
console.log('hello', hello.say(new English()));
