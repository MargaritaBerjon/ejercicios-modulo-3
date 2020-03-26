'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return this.side * 4
  }
  area() {
    return this.side ** 2
  }
}

const newSquare = new Square(1);
const newSquare3 = new Square(3);
const newSquare7 = new Square(7);

console.log(newSquare.perimeter());
console.log(newSquare.area());

console.log(newSquare3.perimeter());
console.log(newSquare3.area());

console.log(newSquare7.perimeter());
console.log(newSquare7.area());