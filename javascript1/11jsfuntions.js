// function AddTwoNum(number1,number2){
    // console.log(number1+number2);
// // }


// const result=AddTwoNum(2,8);

// console.log(typeof result);

function AddTwoNum(number1,number2){
   // const result =number1+number2;
    //return result;
    return number1+number2;
}
 



// console.log( `result : ${result}`);

// function userLogInMessage(username){
//     if(username ===undefined){
//         console.log("please enter a user name");
//         return;
//     }
      
//     return `${username} just Logged in`;
// }

// console.log(userLogInMessage());

function userLogInMessage(username){
    if(!username){
        console.log("please enter a user name");
        return;
    }
      
    return `${username} just Logged in`;
}

console.log(userLogInMessage("SAM"));

function calculateCartPrice(...num1){
    let sum =0;
        for(let i=0;i<=num1.length-1;i++)
        {   let k=Number.parseInt(num1[i]);
            sum=sum+k;
           // console.log(num1[i],k,sum);
        }
    
        
    return sum;
}

console.log(`Cart Total Amount ${calculateCartPrice(200,300,500)}`);

user = {
    userName: "Vinnaay",
    userId : "user@777",
    cartVal : `${calculateCartPrice(200,300,500)}`
}


function handleObj(anyObj){
    console.log(`userName : ${anyObj.userName} and Cart Total Value : ${anyObj.cartVal}`);
}

// handleObj(user)
handleObj({userName: "Vinnaay",
userId : "user@777",
cartVal : `${calculateCartPrice(200,300,500)}`})


const arr=[56,74,69,71,84,16];

function returnArrayTotal(myarr){
    let k=0,sum=0;
    for(let i=0;i<myarr.length;i++){
        k=Number.parseInt(myarr[i]);
        sum=sum+k;
    }
    console.log(`Sum of Array is : ${sum}`);
}

returnArrayTotal(arr);

