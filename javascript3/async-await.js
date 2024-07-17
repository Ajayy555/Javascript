

async function getDetails(){
   try{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary');
    const data= await response.json();
    console.log(data.login);

   }catch(error){
    console.log(err);
   }
}

getDetails();