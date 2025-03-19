'use strict';

// Membuat class BankAccount
class BankAccount {
    #balance; // Properti private
  
    constructor(initialBalance) {
      this.#balance = initialBalance; // Menginisialisasi properti private
    }
  
    // Method untuk menambah saldo
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposit berhasil: ${amount}`);
      } else {
        console.log("Jumlah deposit harus lebih dari 0.");
      }
    }
  
    // Method untuk mendapatkan saldo
    getBalance() {
      return this.#balance;
    }
  }
  
  // Contoh pemakaian
  let account = new BankAccount(1000);
  account.deposit(500);
  console.log(account.getBalance()); // Output: 1500
  console.log(account._balance); // Akan menghasilkan undefined atau error
  