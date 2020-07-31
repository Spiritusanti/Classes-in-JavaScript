// reference type
// does [] = []? this returns false

// what about this?
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

// what happens in this case?
object1 === object2 //?
// returns true!

// what about:
object1 === object3 
// returns false

// if we reassign object1 what happens to object2?
object1.value = 15;
object2.value //returns 15

// A reference type is a non-primitive type that is created by the programmer. When we instantiate object1 we give it a box in memory and then we have object2 reference that same box. object3 references its own memory box and that is why when we compare values it returns false as we are comparing non-primitive types. 


// context
// not the same thing as scope.

//context tells us where we are within the object. For example:
console.log(this);
//returns the window object when called in the browser console.

//the 'this' keyword refers to the object it is being called in. Generally what is left of the dot when using dot notation.


// instantiation
// creating instances for multiple copies of an object:

class Player {
  // every time we call player it runs the contructor function constructor function on the object giving it the name and type properties.
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  // we can add a method that will always be available to objects of this class.
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

// if we're making a game and we want to add more classes that use the same basic structure but also add on to it:

Class Wizard extends Player {
  constructor(name, type) {
    // when extending a class we call super to reference the constructor within the original class and pass the necessary props.
    super(name, type)
  }
  play() {
    console.log(`Weeee I'm a ${this.type}`)
  }
}

//now when we want to create new players(objects) we call a new instance of Wizard and assign it to a vairable to give it a space in memory. These player objects have access to both the methods from Player and from Wizard.

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// an example of classial inheritance from pre-ES6: 
var Player = function(name, type) {
  this.name = name;
  this.type = type;
}

Player.prototype.introduce = function() {
  console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Shawn', 'Dark Magic');

wizard1.play = function() {
  console.log(`Weeee I'm a ${this.type}`);
}

wizard2.play = function() {
  console.log(`Weeee I'm a ${this.type}`);
}

//not as efficient or readable as the new syntax.