'use strict';

// SOAL 4
// Di JavaScript, fungsi juga merupakan objek. Berdasarkan konsep ini, ubahlah fungsi berikut agar memiliki properti description yang berisi teks "Ini adalah fungsi penjumlahan".

function add(a, b) {
  return a + b;
};

add.description = {description: 'Ini adalah fungsi penjumlahan'}

console.log(add.description);
function add(a, b) {
    return a + b;
  }
  
  // Tambahkan properti di sini
  
  console.log(add.description); // Output: "Ini adalah fungsi penjumlahan"

  
