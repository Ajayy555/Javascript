// // // // console.log("ajay sood");

// // // // const marks=100;

// // // // console.log(marks);

// // // // // marks=200;
// // // // console.log(marks);

// // // // const scorecard ={
// // // //     wickets :1,
// // // //     score :200
// // // // }

// // // // console.log(scorecard);

// // // // scorecard.wickets=2;
// // // // console.log(scorecard);

// // // // const myobj={}

// // // // if(Object.keys(myobj).length===0)
// // // //     console.log("Empty object");
// // // // else 
// // // // console.log("Not a empty object ");
// // // // let val;
// // // // // nullish coalescing operator (??) : null undefined
// // // // //val = 5 ?? 10 print 5
// // // // // val=null ?? 100 print 100
// // // // // val= undefined ?? 100 print 100
// // // // val = null ?? 10 ??15

// // // // console.log(val);

// // // // // terinary operator

// // // // // condition ? true : false

// // // // const age=17;
// // // // age>=18 ? console.log("Eligible for voting"): console.log("Not Eligible for voting");;

// // // // const weekDay=5;
// // // // switch(weekDay){
// // // //     case 1: console.log("Monday");break;
// // // //     case 2: console.log("Tuesday");break;
// // // //     case 3: console.log("Wednesday");break;
// // // //     case 4: console.log("Thursday");break;
// // // //     case 5: console.log("Friday");break;
// // // //     case 6: console.log("Saturday");break;
// // // //     case 7: console.log("Sunday");break;
// // // //     default: console.log("Please Entrer Valid Weekday");
    


// // // // }

// // // function addtwo(num1,num2)
// // // {
// // // return num1+num2;
// // // }

// // // console.log(addtwo(5,7));

// // // const addmul=function(...nums){
// // //     let SumNum=0
// // //     for(let i=0;i<nums.length;i++)
// // //         {
// // //             SumNum=SumNum+nums[i];
// // //         }
// // //         return SumNum;
// // // }

// // // console.log(addmul(67,65,26,20))

const student={
    Name:'Ajay',
    Class:'BCA',
    Rollno:4012/18,
    Fee:'paid',

    feeAlert : function(){
        console.log(`Hi Mr. ${this.Name} Your Semester Fee is ${this.Fee}`);
    }
}
// //     // student.feeAlert();
// // }


// // // Object.freeze(student);
// // student.Name="Mayank";
// // console.log(student);

// // const {Name:nm}=student;
// // console.log(nm);

// // function Greet(){
// //     let Name='Ajay';
// //     console.log(this.Name); // undefined eroor
// // }

// // Greet();

// const Greet= ()=>{              // arrow function
//     let Name='Ajay';
//     console.log(this.Name); // undefined eroor
// }

// Greet();

const addMul = (...nums) => {
    let SumNum=0;
    for(let i=0;i<nums.length;i++)
        {
            SumNum=SumNum+nums[i];
        }
        return SumNum   
}
console.log( addMul(6,5,4,3,2,1));

const addtwo = (num1,num2) => (num1+num2);

console.log( addtwo(6,5));

const displayUserName = (user) => ( console.log(`${user.Name}`));

displayUserName(student);

(function dispStudent(user){
    console.log(`Name : ${user.Name}\nClass : ${user.Class}`)
})(student)


let val1;
let val2;

val1=undefined ?? 10 ?? 15;
console.log(val1);

let age=17;

age>=18?console.log('eligible'):console.log('not Eligible');