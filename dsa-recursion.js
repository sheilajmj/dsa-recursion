// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?


// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

// The input to each recursive call is:
    // 3 - 1 = 2 
                    //3 Another sheep jumps over the fence
    // 2 -1 =  1 
                    //2 Another sheep jumps over the fence
    // 1 -1 = 0 
                    //1 Another sheep jumps over the fence
    // base case 0 
                    // All the sheep jumped over the fence

// the output should be n + Another sheep jumps over the fence until n reaches 0 (the base case) where it should return All the sheep jumped over the fence

countingSheep=(num) => {
    if (num === 0) {
    return("All the sheep jumped over the fence")
    }    
    if (num >= 1){
    console.log(num + " Another sheep jumps over the fence")
    }
    countingSheep(num-1)
}


console.log (countingSheep(3))
        
      ////  why is my 'all the sheep jumped ' coming back undefined??
      console.log (countingSheep(3))
  

//   2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

// input  --  integer as base and exponent (positive exponents)
// output -- integer  
    //  if a an exponent is negative return "exponent should be >= 0"
// recursive call input  
   // base * powerCalc(base, exp-1)
// recursive call output
    //ie. 8, 4, 2, 1, 

    const powerCalc = (base, exp) => {
        if(exp === 0) return 1;
        if (exp <= 0) return "exponent should be >= 0"
        return base * powerCalc(base, exp-1);
     }
    
    powerCalc(2, 3)



//3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

// input -- string
// output  -- string reversed
// recursive call input --  
     


revStr = (str) => {
  if(str === ""){
  return str
  }
  return revStr(str.substr(1)) + str[0]
}

revStr("cat")


//4. Triangle Number
triangleNumber = (n) => {
  if(n === 1){
    return n
  }
return n + triangleNumber(n-1)
}

triangleNumber(9)

//5. Reverse String
////////ASK in Slack...
// splitter = (num) => {
// if (num.length === 4){
//   return num
// }

// else{
//   let n=0
//   if(num.substr(n) === '/' ){
//     return ','

//   }


//   )
//   if (num.length === 4 ){
//   return
//   }
//   else {
//       console.log (num.substr(0, 2) + '/')
//       return splitter(num-2)
// }
  

// splitter("02/20/2020")



// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.




