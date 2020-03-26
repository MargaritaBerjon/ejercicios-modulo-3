'use strict';

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
    this.side = base;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
    this.base = base;
    this.height = height;
  }

  area() {
    return super.area() / 2;
  }
}


const newSquare = new Square(4);
const newTriangle = new Triangle(4, 3);


console.log(newSquare.perimeter());
console.log(newTriangle.perimeter());

console.log(newSquare.area());
console.log(newTriangle.area());

