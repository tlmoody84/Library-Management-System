class Book {
    constructor(title, author, isbn, availableCopies){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
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

returnBook(){
    this.availableCopies++;
    console.log(`"${this.title}" returned successfully.`);
   }

   class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books = this.books.filter((book) => book.isbn !== isbn);
    }

    listAllBooks() {
        console.log(`** ${this.name} Book List **`);
        for (const book of this.books) {
          console.log(`- Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`);
        }
      }
    }

    const myLibrary = new Library("Read with Tiffany");

 const book1 = new Book("The Berenstain Bears in the Dark", "Stan and Jan Berenstain", "9780261102694", 2);
 const book2 = new Book("Cat in the Hat", "Dr. Seuss", "9780394800011", 17);

 myLibrary.addBook(book1);
 myLibrary.addBook(book2);

 book1.borrowBook(); 
 book2.borrowBook(); 

 myLibrary.listAllBooks();

 myLibrary.removeBook(book2.isbn);
 book2.returnBook(); 

 myLibrary.listAllBooks();
 