//q1

// let number = 532443;
// let number2 = number.toString();

// for(let i = number2.length -1 ; i>=0 ; i--){

// console.log(number2[i]);

// }




//q2

// for(let i =0 ; i <=15 ; i++){
//   if(i % 2 === 0){
//     console.log(i +" Even")
//   }else{
//     console.log(i +" Odd")
//   }
// }





//q3

// let str = prompt("enter the word");
// let asciiCodes = [];
// let result = '';


// for (let i = 0; i < str.length; i++) {
//     asciiCodes.push(str.charCodeAt(i));
// }

// function bubbleSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {

//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {

//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let sortedNumbers = bubbleSort(asciiCodes);


// for (let i = 0; i < asciiCodes.length; i++) {

//     result += String.fromCharCode(asciiCodes[i]);
// }

// console.log(result);
  
  






//q4

// function insertDashes(num) {
    
//     let numString = num.toString();
//     let result = "";
  
//     for (let i = 0; i < numString.length; i++) {
//       result += numString[i];
  
    
//     if (i < numString.length - 1 && numString[i] % 2 === 0 && numString[i + 1] % 2 === 0) {
//         result += "-";
//       }
//     }
  
//     return result;
// }
  
//   let input = 025468;
//   let output = insertDashes(input);
//   console.log(output);









//q5

// function Agechecker (){

// let age = prompt("Enter your age");

// age >=18 ? alert("you is Adult ") : alert("you is Minor");
// }

// Agechecker();