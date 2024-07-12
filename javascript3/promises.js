const promise1= new Promise(function (resolve , reject){
    // async task , netwrk call db call;
    setTimeout(function(){
        console.log('async task complete');
        resolve();
    },1000)


})

promise1.then(function(){
    console.log("promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('async 2 resolved');
})

const promise3=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai",email:'ajaysood295@gmail.com'})



    },1000)

}).then(function(user){
    console.log(user);
})


// const promise4=new Promise(function(resolve,reject){
//     setInterval(function(){
//         let error=false;
//         if(!error){
//             resolve({username:'harsh',pass:'1243'})
//         }     else{
//             reject ('Error : Something went Wrong');
//         } 
//     },1000);

// });

// promise4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(ERR){
//     console.log(ERR);
// })

const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'jitesh', pass:'1192'})
        }else{
            reject('error js went wrong')
        }

    },1000)

})

async function consumepromise5(){
    try {const response= await promise5;
    console.log(response);}catch(error){console.log(error);}
}

consumepromise5();