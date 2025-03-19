'use strict';

//SOAL 1
//Buatlah sebuah fungsi getFormattedDate() yang mengembalikan tanggal saat ini dalam format berikut:
// Hari ini: 10 Maret 2025, pukul 14:30.

//Mendapatkan watu saat ini
let sekarang = new Date ();

console.log(sekarang);//output: 2025-03-11T14:36:08.975Z

//Menggunakan format lokal WIB

let getFormattedDate = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

console.log(getFormattedDate.format(sekarang));