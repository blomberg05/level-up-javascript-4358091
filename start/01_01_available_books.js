class Books {

  constructor(title, author, isbn, numOfCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numOfCopies = numOfCopies;
  }

  get Availibility() {
   return this.getAvailibility();
  }
  getAvailibility() {
  switch(this.numOfCopies){
      case  this.numOfCopies === 0 : {
        return "Out of stock";
      }
      case this.numOfCopies < 10 : {
        return "Low stock";
      }
      default : {
       return  "In stock";
      }
    }
  }
  sell(numOfCopiesSold = 1) {
    return this.numOfCopies -= numOfCopiesSold;
  }

  restock(copiesRestock = 5) {
    return this.numOfCopies += copiesRestock;
  }

}