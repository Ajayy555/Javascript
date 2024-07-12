// const stuRecord = new Object()
const fbUser={}

fbUser. id ="fb@1234";
fbUser.username ="Vinaayy";


// console.log(fbUser);///declaring obj 2nd method

const regularuser={
    email:"fb@123.email.com",
    fullname : {
            firstName : "Ajay",
            lastName : "Sood"
    }
}

console.log(regularuser.fullname.firstName);

const week={
    1:"Monday",
    2:"tuesday",
    3:"wednesday"
}

const month ={
    4:"April",
    5: " May"
}
// const combweekmonth={week,month}
const combweekmonth=Object.assign({},week,month)  // {} target,,onb1,obj2-sourece
console.log(combweekmonth);

const obgComb={...week,...month};           // Merge objects spread operator
console.log(obgComb);

console.log(fbUser);
console.log(Object.keys(fbUser));
console.log(Object.entries(fbUser));
const userEntries=Object.entries(fbUser)
console.log(userEntries[1][1]);
const UserValues=Object.values(fbUser);
console.log(UserValues[1]);

console.log(fbUser.hasOwnProperty('username'));


const course={
    courseName : "BCA",
    fees : 21402,
    Teacher : "Gaurav"
}

const {courseName :cname}= course;      // destructring obj
console.log(cname);

/*{
    name : "harsh Kumar",
    course : "Arts"
/}*/