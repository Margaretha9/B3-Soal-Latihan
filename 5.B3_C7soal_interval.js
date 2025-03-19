'use strict';

// SOAL 5
// Apa output dari kode berikut, dan jelaskan alasannya?

let count = 0;

let interval = setInterval(() => {
  console.log(`Hitungan: ${++count}`);
  if (count === 3) clearInterval(interval);
}, 1000);

setTimeout(() => {
  console.log("Selesai!");
}, 4000);

//Hasilnya dilaksanakan 3 kali (Hitungan:1 (0+1=1), Hitungan: 2 (1+1=2), dan Hitungan=3 (2+1=3)) tiap selang 1 detik. Setelah count === 3, interval dihapus dengan perintah clearInterval(interval). Setelah itu ada perintah timeout dengan jangka waktu 4 detik.