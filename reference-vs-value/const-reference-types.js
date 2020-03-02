// using const with arrays and objects is like locking a bag
//  someone can't steal your bag because it's locked in place
//  but they can still take things out or put things in

const constantObject = { a: 2 };
constantObject.a = 3; // no error
constantObject.b = 4; // no error
constantObject = { a: 3 }; // error!

const constantArray = [4];
constantArray[0] = 6; // no error
constantArray[1] = 7; // no error
constantArray = [6]; // error!
