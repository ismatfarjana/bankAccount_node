const accounts = [];

const createAccount = account => {
  accounts.push(account);
  return account;
};

const getAccount = userName => {
  let matchedAccount;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].userName === userName) {
      matchedAccount = accounts[i];
    }
  }
  return matchedAccount;
};

//deposite
const deposite = (account, amount) => {
  if (typeof amount === "number") {
    account.balance = account.balance + amount;
  } else {
    console.log("deposite failed, amount is not a number");
  }
};

//withdraw
const withdraw = (account, amount) => {
  if (typeof amount === "number") {
    account.balance = account.balance - amount;
  } else {
    console.log("withdraw failed, amount is not a number");
  }
};

//getBalance
const getBalance = account => {
  return account.balance;
};

const createBalanceGetter = account => {
  return function() {
    return account.balance;
  };
};

//try out
const dipty = createAccount({
  userName: "dipty",
  balance: 0
});
deposite(dipty, 200);
withdraw(dipty, 100);
const isabela = getAccount("dipty");
const getIsabelaBalance = createBalanceGetter(isabela);
console.log(getIsabelaBalance());
