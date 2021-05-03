class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    set isCheckedOut(checkedOut) {
        return this._isCheckedOut = checkedOut;
    }
    getAverageRating(ratings) {
        let ratingsSum = this.ratings.reduce((cur, rat) => cur + rat, 0);
        const rating = this.ratings.length;
        let ratingAvg = ratingsSum / rating
        return Math.floor(ratingAvg);
    }
    addRating(rat) {
        this.ratings.push(rat);
    }

}
class Book extends Media {
    constructor(author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings)
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())

console.log(historyOfEverything.ratings)
console.log(historyOfEverything)
const Speed = new Movie('Jan de Bont', 'Speed', 116)
console.log(Speed.isCheckedOut)
Speed.addRating(1)
Speed.addRating(1)
Speed.addRating(5)
console.log(Speed.getAverageRating())
console.log(Speed)