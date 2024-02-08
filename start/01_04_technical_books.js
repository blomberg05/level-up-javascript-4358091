class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}
class TecBook extends Book {
  constructor(title, author, ISBN, numCopies,edition) {
    super(title, author, ISBN, numCopies)
    this.edtion = edition;
  }

  getEdition(){
    return `Edition ${this.edtion}`
  }
}
const IceMan = new TecBook("Iceman", "Izzy",12345,2,10);
console.log(IceMan.getEdition()) ;
console.log(IceMan.availability) ;
console.log(IceMan.title) ;
// Write your code here
