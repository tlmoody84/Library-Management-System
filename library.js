class Book {
    constructor(title, author, isbn, availableCopies){
        this.title = title;
        this.author = author;
        this.isbn;
        this.availableCopies = availableCopies;
    }

    borrowBook() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            console.log(`"${this.title}" borrowed successfully.`);

        }else {
            console.log(`Sorry, no copies of"${this.title}" are available.`);
        }
    }

    returnBook(){
        this.availableCopies++;
        console.log(`"${this.title}" returned successfully.`);
    }
}


