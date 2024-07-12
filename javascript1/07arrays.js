const myArray=["ajay","harsh","jitesh","vikshit","Ansh"];
const numArr=[11,66,45,64,57.5,81,17];
let Arr2 = new Array("vinay","balwinder","bal bahadur");

console.log(Arr2[2]);

let Arr3=new Array();
Arr3=Arr2;
//Arr3[2]="Narender modi";           //shalow copy arr 2 index[2] overwrited share memory refernece while copying
/*console.log(Arr3[2]);
console.log(Arr2[2]);

for(let i=0;i<=Arr2.length;i++)
{
    console.log(Arr3[i]);
    console.log(Arr2[i]);
}

console.log(Arr2.length);*/

// +++++++++++++++++++++ Methods +++++++++++++++++++++++++

Arr3.push('Rahul Gandhi');
Arr3.push("Amit sha")
Arr3.pop();     // remove last array value

Arr3.unshift("Arwind");   // add at beggining
Arr3.shift();             // remove first index


console.log(Arr3);
console.log(Arr3.includes("vinay"));
console.log(Arr3.indexOf('Rahul Gandhi'));

console.log(myArray);

const Arrjoin = myArray.join();  //changes array to String format
console.log(typeof(Arrjoin));

console.log(numArr);

const arrSlice = numArr.slice(1,3);     // indexing from 1- 2 doesnot change orignal array alues
console.log(`A slice ${arrSlice}`);
console.log(numArr);

const arrSplice = numArr.splice(1,3);   //indexing from 1-3 and manipualte orginal array
console.log(`A splice ${arrSplice}`);
console.log(numArr);

