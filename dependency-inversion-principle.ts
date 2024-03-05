// Dependency Inversion Principle

interface Database {
    insert(): void;
    update(): void;
    delete(): void;
}

class MySql implements Database {
    public insert() {}
    public update() {}
    public delete() {}
}

class FileSystems implements Database {
    public insert() {}
    public update() {}
    public delete() {}
}

class MongoDB implements Database {
    public insert() {}
    public update() {}
    public delete() {}
}

class Log { // high level
    private db: Database;

    public setDatabase(db: Database) {
        this.db = db; // low level
    }

    public update() {
        this.db.update();
    }
}

