const name="Ajay";
const lastName="sood";

//console.log(name + lastName);

console.log(`Hello my Name is  ${name} and last Name is ${lastName}`);// `` backtiks //string interpolation

const gameName= new String('Game of two throwns of raja rajmal');

console.log(gameName[6]);
console.log(gameName.__proto__);

console.log(`length = ${gameName.length}`);

console.log(`upperCase = ${gameName.toUpperCase()}`);
console.log(`CharAt (9) = ${gameName.charAt(9)}`);
console.log(`index of (t) = ${gameName.indexOf('t')}`);
console.log(`subString= ${gameName.substring(9,17)}`);    // print char bw index 9-17
console.log(`subStr= ${gameName.substr(9,17)}`);       // print char start from 9 then 17 char added excluding space

const newString=gameName.substr(9,6)
console.log(newString);
const anotherString = gameName.slice(9,6); // - slice from last not wroking 
console.log(anotherString);

console.log(`subStr= ${gameName.slice(0,6)}`);       // print char start from 9 then 17 char added excluding space

let password= "    @123User name  ";
console.log(password.trim());
//password=password.trim();
console.log(password);

console.log(password.split('@'));

