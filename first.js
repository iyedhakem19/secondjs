/*reverse string*/
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
console.log(reverseString("hello"))
/*count character*/
var str = "Hello, world";

console.log(str.length); 


/*first letter*/
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1) .charAt(1);
}
console.log(words)
/*max & min*/
function findMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return undefined;  // Or throw an error depending on use case
    }
    
    let max = arr[0];  // Start with the first element as the initial maximum
    
    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];  // Update max if a larger value is found
      }
    }
    
    return max;
  }
  function findMin(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return undefined;  // Or throw an error depending on use case
    }
    
    let min = arr[0];  // Start with the first element as the initial minimum
    
    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];  // Update min if a smaller value is found
      }
    }
    
    return min;
  }
  const numbers = [3, 5, 7, 2, 8, 1, 6];

  const max = findMax(numbers);
  console.log("Maximum Value:", max);  // Output: 8
  
  const min = findMin(numbers);
  console.log("Minimum Value:", min);  // Output: 1
/*sum of an array*/
const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
/*fitre of an array*/
const word = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
/*factorial*/
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);

  // Function to check prime number

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);
// program to generate fibonacci series up to n terms



const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}