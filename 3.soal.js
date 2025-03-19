'use strict';

// Membuat class Person
class Person {
    constructor(name) {
      this.name = name; // Properti name
    }
  
    // Method greet()
    greet() {
      console.log(`Halo, nama saya ${this.name}.`);
    }
  }
  
  // Membuat class Student yang mewarisi dari Person
  class Student extends Person {
    constructor(name, grade) {
      super(name); // Memanggil constructor dari Person
      this.grade = grade; // Properti tambahan grade
    }
  
    // Overriding method greet()
    greet() {
      console.log(`Halo, nama saya ${this.name} dan saya di kelas ${this.grade}.`);
    }
  }
  
  // Contoh pemakaian
  let student = new Student("Budi", "10");
  student.greet(); // Memanggil method greet()
  