/*
Sensa must say "For the North" each second, based on a 'north' event        
After the first time Sansa says her sentence, John must say "Winter is coming"                                                                     
After each time Sansa says her sentence, Arya must say "The King in the                                                                            
North" asynchronously based on an event 'arya'                              
The program must end after 5 seconds                                        
*/

const john = 'John';  
const arya = 'Arya';  
const sensa = 'Sensa';  

const say = hero => sentence => console.log(`${hero} says : ${sentence}`);  
const johnSay = say(john); 
const aryaSay = say(arya);  
const sensaSay = say(sensa);

const EventEmitter = require('events');  
const myEmitter = new EventEmitter();  
  
myEmitter.on('north', () => {  
    sensaSay('For the North');  
    setImmediate(() => myEmitter.emit('aria'));
});  
  
myEmitter.once('north', () => {  
    johnSay('Winter is coming');  
});  

myEmitter.on('aria', () => {  
    aryaSay('The King in the North');  
});  

const timeoutObj = setTimeout(() => {   
    myEmitter.emit('north');
}, 1000);  

const intervalObj = setInterval(() => {  
    myEmitter.emit('north') 
}, 1000);

setTimeout(clearInterval, 5000, intervalObj);
clearTimeout(timeoutObj);

