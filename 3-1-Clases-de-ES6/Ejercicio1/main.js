'use strict';

class Square {
  perimeter(side) {
    return side * 4
  }
  area(side) {
    return side ** 2
  }
}

const newSquare = new Square();
console.log(newSquare.perimeter(9));
console.log(newSquare.area(9));