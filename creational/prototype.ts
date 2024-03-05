class Cat {

}

const obj1 = new Cat();
const obj2 = new Cat();
const obj3 = new Cat();

class Post {
    tags;
    constructor(db) {
        this.tags = db.tags.fetchAll();
    }
}


class Book {
    private title;
    private price;
    private content;

    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.content = this.fetchContentFromDb();
    }

    public fetchContentFromDb() {
        // const content = db.books.where('title', title).find().content;
        const content = "The book content";

        return content;
    }
}

const book1 = new Book('Funny JS', 36);
// ...
const book2 = new Book('Funny JS', 36);


interface Prototype {
    clone();
}

class Book1 implements Prototype {
    private title;
    private price;
    private content = null;

    constructor(title, price, content = null) {
        this.title = title;
        this.price = price;
        this.content = content !== null ? content : this.fetchContentFromDb();
    }

    public clone() {
        const content = this.content + ' (cached)';

        return new Book1(this.title, this.price, content);
    }

    public fetchContentFromDb() {
        // const content = db.books.where('title', title).find().content;
        const content = "The book content";

        return content;
    }

    public getContent() {
        return this.content;
    }
}

const original = new Book1('Funny JS', 36);
const cloned = original.clone();