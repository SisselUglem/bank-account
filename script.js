// BANK ACCOUNT

// OBJEKT
const account = {
  accountName: "Account one",
  balance: 100,

  getBalance: function () {
    alert(`Your balance on ${this.accountName} is ${this.balance} dollars`);
  },

  deposit: function () {
    let amount = parseFloat(prompt("How much would you like to deposit?"));
    this.balance = this.balance + amount;

    if (isNaN(amount) || amount === " " || amount <= 0) {
      alert(`You can only enter numbers and amounts over 0 dollars`);
      this.deposit();
    } else {
      alert(`Your deposit has been successfully completed.`);
    }
  },

  withdrawal: function () {
    let amount = parseFloat(prompt("How much would you like to withdrawal?"));
    this.balance = this.balance - amount;

    if (isNaN(amount) || amount === " " || amount <= 0) {
      alert(`You can only enter numbers and amounts over 0 dollars`);
      this.deposit();
    } else {
      alert(`Your withdrawal has been successfully completed.`);
    }
  },

  getAccountName: function () {
    alert(`Current account name is ${this.accountName}`);
  },

  accountError: function () {
    alert(`You must enter a number from 1 to 5`);
  },

  exitAccount: function () {
    window.opener = self;
    window.close();
  },
}


// STARTER FUNCTION
function atm() {
  let choice = parseInt(
    prompt(
      `Welcome to the ATM Bank! Choose an option: 
      1. See Balance 
      2. Make desposit 
      3. Make a withdrawal 
      4. Get account name 
      5. Exit`));

  //User makes a choice from 1-5. each number calls a different function from the main object.
  if (choice === 1) {
    account.getBalance();
    atm();
  } else if (choice === 2) {
    account.deposit();
    atm();
  } else if (choice === 3) {
    account.withdrawal();
    atm();
  } else if (choice === 4) {
    account.getAccountName();
    atm();
  } else if (choice === 5) {
    account.exitAccount();
  } else {
    account.accountError();
    atm();
  }
}

atm();

//Why Parse float? ANWSER..._______________
