// const promise=new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//         console.log('ascyn 1 ');
//         resolve();
//         }else{
//             reject('wrnong val')
//         }

//     },1000)

// }).then(function(){
//     console.log('resolve consumed');
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log('finnaly called');

// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('async 2 resolved');
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({usename:'ajay',email:'ajay@email.com'});


//     },1000)
// }).then(function(user){
//     console.log(user);
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({user:'harsh',pass:'1234'})
        }else{
            reject("Error while Fetch Data from DB")
        }
    },1000)


}).then(function(user){
    console.log(user.user);
}).catch((er)=> console.log(er))


    




fetch('https://api.github.com/users/hiteshchoudhary')
.then((Response)=>{
    return(Response.json());
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})