const indCric=["Virat","rohit","ravinder","Bhuvi"];
const ausCric=["Smith","cummins","warner","starc"];

// indCric.push(ausCric);
// // console.log(indCric[4][1]);

// const newTeam=ausCric.concat(indCric);   //  merge two arrays into one array
// console.log(newTeam);

const newTeam=[...ausCric,...indCric]       //spread operator joins two array
console.log(newTeam);

console.log(Array.isArray("ajay"));;
console.log(Array.from("ajay"));;
let mark1=78;
let mark2=69;
let mark3=84;

console.log(Array.of(mark1,mark2,mark3));