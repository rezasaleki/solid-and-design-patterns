// Single Responsibility Principle

class User {
    public id: string = '';

    constructor(id: string) {
        this.id = id;
    }

    getOne(id: string) {}

    getList() {}

}

class Mailer {
    send(user: User) {

    }
}

class Logger {
    show(user: User) {

    }
}

class Order {
    list(user: User) {
        return [ {  id: 1, userId: '1' }, {  id: 1, userId: '2' }, {  id: 1, userId: '2' } ].filter(order => order.userId === user.id); 
    }
    // incorect method
    getListOfUsers() {}

}

const user = new User('2');

const order = new Order();

console.log('order', order.list(user));
