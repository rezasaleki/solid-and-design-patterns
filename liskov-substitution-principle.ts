// Liskov Substitution Principle

class A {}
class B extends A {} // LSP 

class Note {
    public readonly notes: Array<string> = [];

    save(text: string): void {
         // save process
        this.notes.push(text);
    }

    print(): Array<string> {
        return this.notes;
    }
}

class ReadonlyNote extends Note {
    save(text: string): void { // override method
        throw new Error(`Can't update readonly notes`);
    }
}

class WriteableNote extends Note {
    save(): void { // override method
         // save process
    }
}

const newNote = new Note();
newNote.save('new note');
console.log(newNote.print());

const readonlyNote = new ReadonlyNote();
readonlyNote.save('new note 1');
console.log(readonlyNote.print());
