/*
class Car {
  constructor(color, brand, model, type) {
    this._color = color
    this._brand = brand
    this._model = model
    this._type = type
  }
  set color(value) {
    this._color = value
  }
  get getColor() {
    return this._color
  }

}

let vocho = new Car('black', 'Volkswagen', '01', 'Gasoline')
console.log(vocho)
*/

/*
class Rectangle {
  constructor(height = 0, width = 0) {
    this._height = height
    this._width = width
  }

  set height(value) { this._height = value }
  get getHeight() { return this._height }
  set width(value) { this._width = value }
  get getWidth() { return this._width }

  get area() { return this._height * this._width }
}

let rec01 = new Rectangle(10,20)
rec01.height = 10
rec01.width = 20
console.log(rec01.area)
*/

/*
class Device {
  constructor() {
    this._status = 'off'
    this._type = 'any'
  }

  set setType(value) { this._type = value }
  get getType() { return this._type }
  set setStatus(value) { this._status = value }
  get getStatus() { return this._status }

  start() { this._status = 'on' }
}

class Tv extends Device {}
class Blueray extends Device {}
let myTv = new Tv()
let myBlueray = new Blueray()
console.log(myTv.getType)
console.log(myTv.getStatus)
*/

class Person {
  constructor(name, age) {
    this._name = name
    this._age = age
  }
  walk() { console.log(`${this._name} is walking`) }
}

class Student extends Person{
  constructor(name, age, subject) {
    super(name, age)
    this._subject = subject
  }
}

let gordo = new Student('erik', '21', 'english')
gordo.walk()

class foo {}

console.log(foo instanceof Function)
console.log(foo.prototype instanceof Object)