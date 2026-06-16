class Book{
    private title: string;
    private author: string;
    private isbn: string;
    private isAvailable: boolean;

    constructor(title: string, author: string, isbn: string){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    borrowBook() : boolean{
        if(this.isAvailable){
            this.isAvailable = false;
            return true;
        }
        return false;
    }

    returnBook() : void{
        this.isAvailable = true;
    }

    displayInfo(): void{
        console.log(`${this.title} by ${this.author} (ISBN: ${this.isbn}) - ${this.isAvailable ? "Avaliable" : "Borrowed"}.`)
    }
}

const book = new Book("The Pragmatic Programmer", "David Thomas", "978-0135957059");
book.displayInfo();

let success = book.borrowBook();
console.log(`Borrow successful: ${success}`);
book.displayInfo();

success = book.borrowBook();
console.log(`Borrow successful: ${success}`);

book.returnBook();
book.displayInfo();