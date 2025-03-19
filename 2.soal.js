'use strict';

// Membuat class Animal
class Animal {
    constructor(name) {
      this.name = name; // Properti name
    }
  
    // Method speak()
    speak() {
      console.log(`${this.name} berbicara.`);
    }
  }
  
  // Membuat instance dari class Animal
  let cat = new Animal("Kucing");
  cat.speak(); // Memanggil method speak()

  
