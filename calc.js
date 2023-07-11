const prompt = require("prompt-sync") ({sigint: true});
const add = (a,b) =>{
    return Number(a)+Number(b);
}
const subtract = (a,b) =>{
    return Number(a)-Number(b);
}
const multiply = (a,b) =>{
    return Number(a)*Number(b);
}
const divide = (a,b) =>{
    return Number(a)/Number(b);
}
console.log("Welcome to Da Calc!")
const menu = 'select the option:\n1)add\n2)subtract\n3)multiply\n4)divide'
console.log(menu);
const option = prompt('your selection:')
console.log(option)
const a = prompt('enter first number');
const b = prompt('enter second number');
if(option == 1){
    const c = add(a,b);
    console.log(`when ${a} is added to ${b} it = ${c}`);
}
else if(option == 2){
    const c = subtract(a,b);
    console.log(`when ${a} is subtracted to ${b} it = ${c}`);
}
else if(option == 3){
    console.log('you chose to multiply')
}
else if(option == 4){
    console.log('you chose to divide')
    }
else{
    console.log('error')
}
