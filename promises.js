function walkdog(){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{
        const dog_walk=false
        if(dog_walk){
            resolve("you walk the dog");
        }
        reject("you didnt")
        
    },1500);
})
}

function cleankitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            const kitchen_cleaned=true
            if(kitchen_cleaned){
                resolve("cleaned kitchen");
            }
            else{
                reject("you didnt")
            }
            
            
        },2500);
    })
  
}
function takeouttrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            const taketrash=false
            if(taketrash){
                resolve("cleaned trash");
            }
            reject("you didnt");
            
        },500);
    })
  
}

walkdog().then(value=> {console.log(value);return cleankitchen()})
          .then(value=> {console.log(value);return takeouttrash()})
         .then(value=> {console.log(value);console.log("all done")})
         .catch(error => console.error(error));
