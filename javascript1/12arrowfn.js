const user = {
    userName : "Ajay",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.userName} , Welcome to Website `);
        // console.log(this);
    }
}

// console.log(user);

// user.welcomeMsg();

// user.userName="Harsh";

// user.welcomeMsg();

// console.log(this);

// function Tea(){
//     let chainame ="Maska";
//     console.log(this.chainame);
// }


const Tea = () =>{
    let chainame ="Maska";
    console.log(this.chainame);
}


// Tea();

const addtwo = (num1,num2)=>{
return num1+num2;
}

console.log(addtwo(5,7));

const addthree = (num1,num2,num3)=> (num1+num2+num3);


console.log(addthree(5,7,8));


const myArr =[2,4,5,8,8,15];

// myArr.forEach(()=>{})


// IIFE Imediately Involked Function Expressions(IIFE)

(function dbcon(){
    console.log('db Connected');
})();

(function dbcon2(name){
    console.log(`db connected ${name}`);
})('ajay');