const account = {
  balance: 0
};
//deposite
const deposite = (account, amount) => {
  account.balance = account.balance + amount;
};

//withdraw
const withdraw = (account, amount) => {
  account.balance = account.balance - amount;
};

//getBalance
const getBalance = (account, amount) => {
  return account.balance;
};
deposite(account, 1000);
console.log(getBalance(account));
withdraw(account, 121);
console.log(getBalance(account));
