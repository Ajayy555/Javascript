const stu={
    name :"Ajay ",
    Rollno:4012,
    result:"Pass"
}

const teacher={
    Tname:"Gaurav",
    TId:"PG106",
    SubjectTeacher: "DSA"
}
const stuTeach={...stu,...teacher};
console.log(stuTeach);

console.log(Object.keys(teacher));
console.log(Object.values(teacher));
console.log(Object.entries(teacher));

const {SubjectTeacher:STeach}=teacher;
console.log(STeach);

function AddTwoNum(num1,num2){
    return num1+num2;
}

console.log(AddTwoNum(10,55));

function stuLog(user){
    console.log(`Student : ${user.name} Rollno ${user.Rollno} logged in Succesfully`);
}

stuLog(stu);

function Cart(...num1){
    let sum=0;
    for(i=0;i<num1.length;i++){
        sum=sum+num1[i];
    }
    return sum;
    }


console.log(Cart(27,25,58));


const tripsExpense=[56,78,45,95,18,37,84];

function calcExpense(expenseArr){
    let expns=0;
    for(let i=0;i<expenseArr.length;i++){
        expns=expns+expenseArr[i];

    }
    return expns;
}
console.log(`Total Expense :${calcExpense(tripsExpense)} `);




const result=AddTwoNum(2,8);
console.log(addone(5));


function addone(val){
    return val+1;
}


const addtwo = function(num){
    return num+2;
}

console.log(addtwo(5));