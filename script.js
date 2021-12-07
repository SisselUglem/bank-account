// BANK ACCOUNT

//ASSIGMENT 2-------------------------------------------------------

// STARTER FUNCTION
function atm() {
  let choice = parseInt(
    prompt(
      "Welcome to the ATM Bank! Choose an option: [1. See Balance] [2. Make desposit] [3. Make a withdrawal] [4. Get account name] [5. Exit]"
    )
  );
  //If choise is 1(See balance) -> siplay balance
  if (choice === 1) {
    getBalance();
    atm();
  } else if (choice === 2) {
    deposit();
    atm();
  } else if (choice === 3) {
    withdrawal();
    atm();
  } else if (choice === 4) {
    getAccountName();
    atm();
  } else if (choice === 5) {
    exitAccount();
  } else {
    accountError();
  }
}

// OBJEKT
//const account = {
//accountName: "Account one",
//balance: 100,
//getBalance: function () {
//alert(`Your balance on ${this.accountName} is ${this.balance} dollars`);},
//deposit: function () {
//parseFloat(prompt("How much would you like to deposit?"));},
//withdrawal: function () {
//parseFloat(prompt("How much would you like to withdrawal?"));},
//getAccountName: function () {},
//accountError: function () {},
//exitAccount: function () {},
//};

//created separate varables, did not get the variables from the objekt to work in the main/start function with this.Name
const accountName = "Account one";
let balance = 100;

//FUNCTIONS
//created separate functions, did not get the functions from the objekt to work in the main/start function with this.Name
function getBalance() {
  alert(`Your balance on ${accountName} is ${balance} dollars.`);
}

function deposit() {
  let amount = parseFloat(prompt("How much would you like to deposit?"));
  balance = balance + amount;

  if (isNaN(amount)) {
    alert(`You must enter a number`);
  } else if (amount === 0) {
    alert(`You can't deposit an amount of 0`);
  } else {
    alert(`Your deposit has been successfully completed.`);
  }
}

function withdrawal() {
  let amount = parseFloat(prompt("How much would you like to withdrawal?"));
  balance = balance - amount;

  if (isNaN(amount)) {
    alert(`You must enter a number`);
  } else if (amount === 0) {
    alert(`You can't withdrawal an amount of 0`);
  } else {
    alert(`Your deposit has been successfully completed.`);
  }
}

function getAccountName() {
  alert(`Current account name is ${accountName}`);
}

function accountError(choice) {
  if (isNaN(choice)) {
    alert(`You must enter a number from 1 to 5`);
    atm();
  } else if ((choice === 0, 6, 7, 8, 9)) {
    alert(`You must enter a number from 1 to 5`);
    atm();
  }
}

function exitAccount() {
  window.opener = self;
  window.close();
}

atm();

//Why Parse float? ANWSER..._______________
