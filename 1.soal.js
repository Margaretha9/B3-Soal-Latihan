'use strict';

// Menambahkan method baru pada String.prototype
String.prototype.capitalizeFirst = function() {
    // Mengecek apakah string tidak kosong
    if (this.length === 0) {
      return this;
    }
    // Mengubah huruf pertama menjadi huruf besar dan menggabungkan dengan sisa string
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  
  // Contoh pemanggilan
  console.log("hello world".capitalizeFirst()); // Output: "Hello world"
  