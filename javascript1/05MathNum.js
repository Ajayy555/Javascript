const score= 500;
console.log(score);

const balance = new Number(1001.0157);
console.log(balance);

console.log(typeof(balance.toString()));
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const score2 = 156.78976
console.log(score2.toPrecision(5));

const salary= 146005590;
console.log(salary.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++++ Maths

console.log(Math.abs(-55));  //absolute value change negative to postive only
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log((Math.floor(4.6)));
console.log(Math.sqrt(4));
console.log(Math.max(4,6,3,2,8,4,7));


console.log(Math.random()*100000000+1);  //8 digit random number 

const min=10;
const max=20;

console.log(Math.ceil(Math.random() * (max-min +1) + min));