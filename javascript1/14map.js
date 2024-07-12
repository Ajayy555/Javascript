const myNums=[1,2,3,4,5,6];
const newnums=myNums.filter((num)=> num > 4) //impicit return

console.log(newnums);

const newnums1=myNums.filter((num)=> {return num < 4}) //expicit return
console.log(newnums1);


const add10=myNums.map((num)=> num+10 );
console.log(add10);

const newnum=myNums.map((num)=>num*10).filter((num)=> num>30);
console.log(newnum);

const price=[10,20,50,70];

const MyTotal=price.reduce((acc,curval) =>{
  console.log(`Accumulator ${acc} ,Current Value ${curval}`);
return acc + curval;
},0)

console.log(MyTotal);


const courseCart=[
    {
        CourseName:"Java",
        price:"1599"
    },
    {
        CourseName:"Mogo DB",
        price:"1799"
    },
    {
        CourseName:"HTML 5",
        price:"499"
    },
    {
        CourseName:"Data Science",
        price:"6599"
    },
    {
        CourseName:"Python",
        price:"1199"
    },
]

const CartTotal=courseCart.reduce((acc,item)=> {
    let num=parseInt(item.price)
    console.log(acc, num);
    // console.log(item.price);
    return acc+ num},0);
 console.log(CartTotal);