

//declaing variables//
let myName = "Dela"

let myAge = 20;

let a = 12

let b = 5

//interchanging a and b//
a=a+b
b=a-b
a=a-b
console.log(a,b)



//returning true for isJavaScriptFun, to false and back to true again//
let isJavaScriptFun = true
console.log(isJavaScriptFun)

isJavaScriptFun = false
console.log(isJavaScriptFun)

isJavaScriptFun = true
console.log(isJavaScriptFun)



//Array with three different data types//
const myArray =[20, "Dela", true]
console.log(myArray)


//condition for age//
let age 
if (age => 18) {
    console.log("ADULT")
}
else{
    console.log("MINOR")
}



//loops//
let x=10
for(let i=0; i <= x; i++  ){
    console.log(i)
}


//iterating in the array//
for(const i of myArray){
    console.log(i )
}


//condition to check if a number is even//
let myNumber = 6
if (myNumber%2==0){
    console.log("The Number", myNumber, "is EVEN")
}
else{
    console.log("The number", myNumber, "is Odd")
}


//non-negative number and its factorial//
let inputNumber=3
inputNumber > 0
let result = 1
for(let x=2; x<=inputNumber; x++ ) {
 result *= x
 console.log(result)
}

//object work//
let myObject={
     make: "Carl Benz",
     model: "Mercedes 35 hp",
     year: 2024
    }


    function printCarDetails(){
        console.log("This car is a", myObject.year,  myObject.model, "by", myObject.make )
        return printCarDetails
    }

    printCarDetails()

    






