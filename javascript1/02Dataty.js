"use strict";
console.log('hello');
//alert('hello');

let name="Harsh";
let age=21;
let isLoggedIn= false;
let state; //undefined
let teperature= null;

// number => 2 to 53
// bigInt
// String
// boolean =? true/false
//  null =>standalone value
// undefined => variable declared but not defined ;
// symbol => unique

// object = non primitive datatype

console.log(typeof(state));



// non primtive
const heros = ["prithvi","ranna sanga","gobind singh"]; // array declaration
let myObj={                                             //obj declaration
    name: "ajay",
    age:24,
}

const myFunc = function(){                              //functon declaratoin
    console.log("my name is Ajay");
}

console.log(typeof(myFunc));
console.log(typeof(myObj));



// +++++++++++++++++++++++++++++++++++++++++

// stack used for primitive data type ()    call by value copy of data

// heap used for non primitive data types    (refference data types) memory reference allocated


let nm="Ajay sood";
let anotherName=nm;
anotherName="ajay sood11355566";
console.log(nm);
console.log(anotherName);


const userOne={
    email:"user@google.com",
    upi:"user8080@ybl"
}

let userTwo= userOne;
console.log(userOne.email);
console.log(userTwo.email);

userTwo.email="Ajaysood295@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);