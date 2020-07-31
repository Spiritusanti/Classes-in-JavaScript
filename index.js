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




// context
// instantiation
