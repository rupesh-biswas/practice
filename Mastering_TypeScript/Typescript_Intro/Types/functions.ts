// function square(num: number):number {
//     num.toUpperCase();
//     num();
//     return num * num;
// }
square(3);
square("asdsad");
square(true);

const doSomething = (person: string, age:number, isFunny:boolean) =>(
    `${person} age is ${age} and is funny is ${isFunny}`;
)
doSomething("rup", 23, false);
doSomething("rup");


function greet(person:string = "stranger"){
    return `Hi there, ${person}!`;
}
greet();
greet("A new guy");
greet(123584);

// Returns void - Error
function square(num: number) {
    num * num;
}
square(2);

function rando(num:number) {
    if(Math.random()<0.5){
        return  num.toString();
    }
    return num;
}

const add = (x:number, y:number):number =>{
    return x + y;
}

const colors = ["red", "orange", "yellow"];
colors.map(color=>(color.toUpperCase()));


// Void Type - Function that doesnt retunr anything
function printTwice(msg:string): void{
    console.log(msg);
    console.log(msg)
    // retunrning will give error
    // return msg;

    // This works thats y never
    return undefined; 
}

function giveError(msg:string):never{
    // return undefined;
    throw new Error(msg);
}


