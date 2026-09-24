// Do While Loop

var i = 0;

do{
    i = i+1;
    console.log(i);
}while(i<5)

console.log("_________________")


// While Loop

var j = 0;
while(j<5){
    j = j+1;
    console.log(j);
}

console.log("_________________")


let n = 0;
let x = 0;

while(n < 3){
    n++;
    x += n;
    
    console.log(n);
    console.log(x);
}

console.log("_________________")


//For Loop 
for ( var i = 0; i<5;i++){
    console.log("Value of i is " + i);
}

console.log("_________________")

var names = ['Steve', 'Bill', 'Mark']

var y;

for(y of names){
    console.log(y)
}

