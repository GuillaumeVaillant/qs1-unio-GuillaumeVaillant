/*
Sensa must say "For the North" each second                                  
After the first time Sansa says her sentence, John must say "Winter is                                                                            
coming"                                                                     
After each time Sansa says her sentence, Arya must say "The King in the                                                                            
North"                                                                      
he program must end after 10 seconds 
*/

const john = 'John';  
const arya = 'Arya';  
const sensa = 'Sensa';  
const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);  
const johnSay = say(john);  
const aryaSay = say(arya);  
const sensaSay = say(sensa); 

let oneShotJohn = true; // si const -> UnhandledPromiseRejectionWarning

const interval = setInterval(() => { 
    sensaSay("For the north").then( value => { 
        console.log(value);
        aryaSay("The King in the North").then( value => {
            console.log(value);
        }),
        johnSay("Winter is coming").then( value => {
            if(oneShotJohn) {  console.log(value); }
            oneShotJohn = false;
        });

    });
},1000);

setTimeout(clearInterval, 10000, interval);