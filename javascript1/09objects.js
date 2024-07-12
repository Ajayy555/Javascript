// singleton object created using constructor

// object literals
// Object.create      singleton 
const myId =Symbol("#123");
const fbUser ={
    userName :"Ajay sood",
    [myId] : "fb#1234",                                 //intialize sym in object using sqr brackets
    Pass : "Ajay@fb1234",
    age :18,
    location: "Chandigarh"
}

// console.log(fbUser['userName']);
// console.log(typeof fbUser[myId]);
// Object.freeze(fbUser);                          // freeze object disable object to change key values;
fbUser.Pass="NewPass@1234";
console.log(fbUser['Pass']);

fbUser.greeting=function(){                         //function declaration
    console.log('hello Fb User');
    
}

fbUser.greeting2=function(){
    console.log(`hello Mr ${this.userName}`);
}

fbUser.greeting();
fbUser.greeting2();
console.log(fbUser);