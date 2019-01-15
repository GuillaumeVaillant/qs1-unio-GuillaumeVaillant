/* Sensa must say "For the north" each second, during 10 seconds               
   John must say "Hello Ladies Stark" 2 seconds after the program starts       
   Ayra must say "Thank you for needle" immediately after John spoke but */  
   
const john = 'John';  
const arya = 'Arya';  
const sensa = 'Sensa';  

const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  

const johnSay = say(john); 
const aryaSay = say(arya);  
const sensaSay = say(sensa);

let timerId = setInterval(sensaSay, 1000,"For the north");
setTimeout(() => { clearInterval(timerId); }, 10000);

setTimeout(() => {
    johnSay("Hello Ladies Stark"); 
    setImmediate(aryaSay,"Thank you for needle"); // settimeout à 0
    //process.nextTick(aryaSay,"Thank you for needle");
},2000);

