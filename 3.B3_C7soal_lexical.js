'use strict';

// SOAL 3
// Perhatikan kode berikut:

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }
  return inner;
}

let sayHello = outer();
sayHello();

//Pertanyaan:
//Jelaskan mengapa fungsi inner() tetap bisa mengakses variabel message, meskipun outer() sudah selesai dieksekusi.

//JAWABAN

//Meskipun `outer()` sudah selesai dieksekusi, closure memastikan bahwa lingkungan lokal `outer()` tetap ada di memori selama ada referensi ke fungsi `inner()`. Dengan kata lain:
//- Variabel `message` tidak dihapus dari memori karena masih dibutuhkan oleh `inner()`.







