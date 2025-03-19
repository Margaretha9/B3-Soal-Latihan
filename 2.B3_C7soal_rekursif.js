'use strict';

// Soal 2

//Buatlah fungsi rekursif bernama `factorial(n)` yang menghitung faktorial dari `n`, dimana n = 5. 
// Factorial n! = n*(n-1)*(nn-2).....*1

function factorial(n){
  if(n<0){return "Factorial tidak untuk angka negatif"}
  if (n===0 || n===1){return 1}
  return n*factorial(n-1);
};

console.log(factorial(5));




